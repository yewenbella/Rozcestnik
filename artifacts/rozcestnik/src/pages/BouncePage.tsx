import { useEffect, useRef, useState, useCallback } from "react";
import { useUser, useClerk, useAuth } from "@clerk/react";
import { Trophy, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";

// ─── Constants ────────────────────────────────────────────────────────────────
const GRAVITY    = 0.52;
const BOUNCE_F   = 0.60;
const BALL_R     = 15;
const MOVE_SPD   = 3.8;
const CHUNK_LEN  = 1400;
const CAM_LEAD   = 0.38;

const PLATFORM_COLORS = ["#1d4ed8", "#7c3aed", "#0e7490", "#15803d", "#b45309"];

// ─── Types ────────────────────────────────────────────────────────────────────
interface Plat  { x: number; y: number; w: number; h: number; color: string; }
interface Star  { x: number; y: number; collected: boolean; t: number; }
interface Spike { x: number; y: number; w: number; h: number; }
interface Ball  { x: number; y: number; vx: number; vy: number; onGround: boolean; squish: number; squishV: number; }

// ─── Level generator ─────────────────────────────────────────────────────────
function genChunk(fromX: number, floorY: number) {
  const plats: Plat[] = [], stars: Star[] = [], spikes: Spike[] = [];
  let cx = fromX + 80;
  while (cx < fromX + CHUNK_LEN) {
    const w = 80 + Math.random() * 140, gap = 55 + Math.random() * 95;
    const py = floorY * (0.32 + Math.random() * 0.42);
    const col = PLATFORM_COLORS[Math.floor(Math.random() * PLATFORM_COLORS.length)];
    plats.push({ x: cx, y: py, w, h: 18, color: col });
    const ns = 1 + Math.floor(Math.random() * 4);
    for (let i = 0; i < ns; i++)
      stars.push({ x: cx + (w / (ns + 1)) * (i + 1), y: py - 30, collected: false, t: Math.random() * Math.PI * 2 });
    if (Math.random() < 0.28 && w > 90) {
      const sx = cx + 18 + Math.random() * (w - 50);
      spikes.push({ x: sx - 10, y: py - 20, w: 22, h: 20 });
    }
    cx += w + gap;
  }
  for (let fx = fromX + 40; fx < fromX + CHUNK_LEN; fx += 130 + Math.random() * 90)
    stars.push({ x: fx + Math.random() * 60, y: floorY - 36, collected: false, t: Math.random() * Math.PI * 2 });
  for (let fx = fromX + 220; fx < fromX + CHUNK_LEN - 100; fx += 280 + Math.random() * 200)
    if (Math.random() < 0.45) spikes.push({ x: fx, y: floorY - 22, w: 24, h: 22 });
  return { plats, stars, spikes };
}

// ─── Drawing ─────────────────────────────────────────────────────────────────
function drawBall(ctx: CanvasRenderingContext2D, ball: Ball, flash: boolean) {
  const sx = 1 + (1 - ball.squish) * 0.6, sy = ball.squish;
  ctx.save(); ctx.translate(ball.x, ball.y); ctx.scale(sx, sy);
  ctx.beginPath(); ctx.ellipse(0, BALL_R * 0.85, BALL_R * sx * 0.9, BALL_R * 0.22, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.28)"; ctx.fill();
  ctx.beginPath(); ctx.arc(0, 0, BALL_R, 0, Math.PI * 2);
  const g = ctx.createRadialGradient(-4, -5, 2, 0, 0, BALL_R);
  g.addColorStop(0, flash ? "#fbcfe8" : "#fca5a5");
  g.addColorStop(0.5, flash ? "#ec4899" : "#ef4444");
  g.addColorStop(1,   flash ? "#831843" : "#991b1b");
  ctx.fillStyle = g; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-5, -6, 5, 3.5, -0.5, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.65)"; ctx.fill();
  ctx.restore();
}
function drawPlat(ctx: CanvasRenderingContext2D, p: Plat, cam: number) {
  const sx = p.x - cam;
  ctx.beginPath(); (ctx as any).roundRect(sx, p.y, p.w, p.h, 5); ctx.fillStyle = p.color; ctx.fill();
  ctx.beginPath(); (ctx as any).roundRect(sx, p.y, p.w, 5, [5,5,0,0]); ctx.fillStyle = "rgba(255,255,255,0.22)"; ctx.fill();
}
function drawStar(ctx: CanvasRenderingContext2D, s: Star, cam: number) {
  if (s.collected) return;
  const sx = s.x - cam;
  ctx.save(); ctx.translate(sx, s.y + Math.sin(s.t * 2) * 2); ctx.rotate(s.t * 0.6);
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = (i * Math.PI) / 5 - Math.PI / 2, r = i % 2 === 0 ? 9 : 4;
    if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.closePath(); ctx.fillStyle = "#fbbf24"; ctx.fill();
  ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 1; ctx.stroke();
  ctx.restore();
}
function drawSpike(ctx: CanvasRenderingContext2D, sp: Spike, cam: number) {
  const sx = sp.x - cam;
  ctx.beginPath(); ctx.moveTo(sx + sp.w/2, sp.y); ctx.lineTo(sx + sp.w, sp.y + sp.h); ctx.lineTo(sx, sp.y + sp.h);
  ctx.closePath(); ctx.fillStyle = "#94a3b8"; ctx.fill(); ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 1; ctx.stroke();
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function BouncePage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const { getToken } = useAuth();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<{
    ball: Ball; plats: Plat[]; stars: Star[]; spikes: Spike[];
    score: number; lives: number; camX: number; genX: number;
    invincible: number; gameOver: boolean; started: boolean;
    left: boolean; right: boolean; keys: Set<string>;
  } | null>(null);
  const rafRef = useRef<number>(0);
  const scoreSentRef = useRef(false);
  const nicknameRef  = useRef<string | null>(null);

  const [display, setDisplay] = useState({ score: 0, lives: 3, gameOver: false, started: false });
  const [topScores, setTopScores] = useState<{ player_name: string; score: number }[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Fetch nickname
  useEffect(() => {
    if (!isSignedIn) return;
    (async () => {
      try {
        const token = await getToken().catch(() => null);
        const headers: Record<string,string> = {};
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const res = await fetch("/api/profile", { headers, credentials: "include" });
        const data = await res.json();
        if (data.nickname) nicknameRef.current = data.nickname;
      } catch {}
    })();
  }, [isSignedIn, getToken]);

  const fetchTop = useCallback(async () => {
    try {
      const res = await fetch("/api/bounce-scores/top");
      const data = await res.json();
      if (data.scores) setTopScores(data.scores);
    } catch {}
  }, []);

  useEffect(() => { fetchTop(); }, [fetchTop]);

  const submitScore = useCallback(async (score: number) => {
    try {
      const token = await getToken().catch(() => null);
      const headers: Record<string,string> = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const playerName = nicknameRef.current
        || (user ? (user.fullName || user.firstName || user.username || null) : null)
        || "Hrac";
      await fetch("/api/bounce-scores", {
        method: "POST", headers,
        body: JSON.stringify({ score, playerName }),
      });
    } catch {}
    fetchTop();
  }, [fetchTop, getToken, user]);

  const initState = useCallback((cw: number, ch: number) => {
    const floorY = ch * 0.78;
    const ball: Ball = { x: 80, y: floorY - BALL_R - 1, vx: 0, vy: 0, onGround: true, squish: 1, squishV: 0 };
    const first = genChunk(0, floorY);
    stateRef.current = {
      ball, plats: first.plats, stars: first.stars, spikes: first.spikes,
      score: 0, lives: 3, camX: 0, genX: CHUNK_LEN,
      invincible: 0, gameOver: false, started: false,
      left: false, right: false, keys: new Set(),
    };
    scoreSentRef.current = false;
  }, []);

  const resetGame = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    initState(c.width, c.height);
    setDisplay({ score: 0, lives: 3, gameOver: false, started: false });
    scoreSentRef.current = false;
  }, [initState]);

  useEffect(() => {
    if (!isSignedIn) return;
    const c = canvasRef.current;
    if (!c) return;

    const resize = () => {
      c.width  = c.offsetWidth;
      c.height = c.offsetHeight;
      if (!stateRef.current || stateRef.current.gameOver) initState(c.width, c.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onKey = (e: KeyboardEvent) => {
      const s = stateRef.current; if (!s) return;
      s.keys.add(e.key);
      if ((e.key === " " || e.key === "ArrowUp") && !s.started) { s.started = true; setDisplay(d => ({ ...d, started: true })); }
      if (s.gameOver && e.key === " ") resetGame();
    };
    const offKey = (e: KeyboardEvent) => { stateRef.current?.keys.delete(e.key); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup",   offKey);

    const loop = () => {
      const s = stateRef.current;
      if (!s || !c) { rafRef.current = requestAnimationFrame(loop); return; }
      const ctx = c.getContext("2d")!;
      const cw = c.width, ch = c.height, floorY = ch * 0.78;

      if (s.started && !s.gameOver) {
        const { ball } = s;
        const left  = s.left  || s.keys.has("ArrowLeft")  || s.keys.has("a");
        const right = s.right || s.keys.has("ArrowRight") || s.keys.has("d");
        if (left)  ball.vx = Math.max(ball.vx - 0.7, -MOVE_SPD);
        if (right) ball.vx = Math.min(ball.vx + 0.7,  MOVE_SPD);
        if (!left && !right) ball.vx *= 0.88;
        ball.vy += GRAVITY; ball.x += ball.vx; ball.y += ball.vy;
        ball.onGround = false;

        if (ball.y + BALL_R >= floorY) {
          ball.y = floorY - BALL_R; ball.vy = -(Math.abs(ball.vy) * BOUNCE_F); ball.onGround = true;
          if (Math.abs(ball.vy) < 1.5) ball.vy = 0;
          ball.squish = 0.6; ball.squishV = 0.08;
        }
        for (const p of s.plats) {
          const bx = ball.x, by = ball.y;
          if (bx + BALL_R > p.x && bx - BALL_R < p.x + p.w && by + BALL_R > p.y && by - BALL_R < p.y + p.h) {
            if (ball.vy > 0 && by - BALL_R < p.y) {
              ball.y = p.y - BALL_R; ball.vy = -(Math.abs(ball.vy) * BOUNCE_F); ball.onGround = true;
              if (Math.abs(ball.vy) < 1.5) ball.vy = 0;
              ball.squish = 0.62; ball.squishV = 0.07;
            } else if (ball.vy < 0 && by + BALL_R > p.y + p.h) {
              ball.y = p.y + p.h + BALL_R; ball.vy = Math.abs(ball.vy) * 0.3;
            } else if (bx < p.x + p.w / 2) {
              ball.x = p.x - BALL_R; ball.vx = -Math.abs(ball.vx) * 0.4;
            } else {
              ball.x = p.x + p.w + BALL_R; ball.vx = Math.abs(ball.vx) * 0.4;
            }
          }
        }
        if (ball.y - BALL_R < 0) { ball.y = BALL_R; ball.vy = Math.abs(ball.vy) * 0.4; }
        if (ball.squish < 1) { ball.squish = Math.min(1, ball.squish + ball.squishV); ball.squishV = Math.min(ball.squishV + 0.005, 0.12); }

        const targetCamX = ball.x - cw * CAM_LEAD;
        s.camX += (targetCamX - s.camX) * 0.10;
        if (s.camX < 0) s.camX = 0;

        if (ball.x + cw > s.genX) {
          const chunk = genChunk(s.genX, floorY);
          s.plats = [...s.plats, ...chunk.plats]; s.stars = [...s.stars, ...chunk.stars]; s.spikes = [...s.spikes, ...chunk.spikes];
          s.genX += CHUNK_LEN;
        }
        const cullX = s.camX - 200;
        s.plats  = s.plats.filter(p  => p.x + p.w > cullX);
        s.stars  = s.stars.filter(st => st.x > cullX);
        s.spikes = s.spikes.filter(sp => sp.x + sp.w > cullX);
        for (const st of s.stars) st.t += 0.04;
        for (const st of s.stars) {
          if (st.collected) continue;
          if (Math.hypot(ball.x - st.x, ball.y - st.y) < BALL_R + 10) { st.collected = true; s.score += 10; }
        }
        if (s.invincible === 0) {
          for (const sp of s.spikes) {
            if (ball.x + BALL_R - 4 > sp.x && ball.x - BALL_R + 4 < sp.x + sp.w && ball.y + BALL_R - 4 > sp.y && ball.y - BALL_R + 4 < sp.y + sp.h) {
              s.lives--; s.invincible = 120; ball.vy = -10; ball.vx = ball.vx > 0 ? -4 : 4;
              if (s.lives <= 0) { s.gameOver = true; if (!scoreSentRef.current) { scoreSentRef.current = true; submitScore(s.score); } }
              break;
            }
          }
        } else { s.invincible--; }
        if (ball.y > ch + 60) {
          s.lives--; ball.x = s.camX + cw * 0.3; ball.y = floorY - BALL_R - 1; ball.vx = 0; ball.vy = 0; s.invincible = 90;
          if (s.lives <= 0) { s.gameOver = true; if (!scoreSentRef.current) { scoreSentRef.current = true; submitScore(s.score); } }
        }
        setDisplay({ score: s.score, lives: s.lives, gameOver: s.gameOver, started: s.started });
      }

      // Draw
      const bg = ctx.createLinearGradient(0, 0, 0, ch);
      bg.addColorStop(0, "#020617"); bg.addColorStop(0.5, "#0c1a35"); bg.addColorStop(1, "#0f172a");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      for (let i = 0; i < 60; i++) { ctx.fillRect((i * 137 + 31) % cw, (i * 97 + 17) % (ch * 0.75), 1.2, 1.2); }

      const fg = ctx.createLinearGradient(0, floorY, 0, floorY + 40);
      fg.addColorStop(0, "#1e3a5f"); fg.addColorStop(1, "#0f172a");
      ctx.fillStyle = fg; ctx.fillRect(0, floorY, cw, 40);
      ctx.fillStyle = "rgba(56,189,248,0.35)"; ctx.fillRect(0, floorY, cw, 3);

      for (const p of s?.plats ?? []) { const sx = p.x - (s?.camX??0); if (sx + p.w < -10 || sx > cw + 10) continue; drawPlat(ctx, p, s?.camX??0); }
      for (const st of s?.stars ?? []) { if (st.collected) continue; const sx = st.x - (s?.camX??0); if (sx < -20 || sx > cw+20) continue; drawStar(ctx, st, s?.camX??0); }
      for (const sp of s?.spikes ?? []) { const sx = sp.x - (s?.camX??0); if (sx + sp.w < -10 || sx > cw+10) continue; drawSpike(ctx, sp, s?.camX??0); }
      if (s) drawBall(ctx, s.ball, s.invincible > 0 && Math.floor(s.invincible / 6) % 2 === 0);

      // Score on canvas
      if (s && s.started && !s.gameOver) {
        ctx.font = `bold ${Math.min(18, cw * 0.045)}px system-ui`;
        ctx.fillStyle = "rgba(0,0,0,0.4)"; ctx.textAlign = "left"; ctx.fillText(`${s.score} ★`, 17, 33);
        ctx.fillStyle = "#fbbf24"; ctx.fillText(`${s.score} ★`, 16, 32);
        ctx.textAlign = "left";
      }

      if (s && !s.started) {
        ctx.fillStyle = "rgba(0,0,0,0.55)"; ctx.fillRect(0, 0, cw, ch);
        ctx.textAlign = "center";
        ctx.fillStyle = "#fbbf24"; ctx.font = `bold ${Math.min(42, cw * 0.1)}px 'Arial Black', sans-serif`; ctx.fillText("BOUNCE", cw/2, ch*0.37);
        ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.font = `bold ${Math.min(15, cw * 0.038)}px Arial, sans-serif`; ctx.fillText("Sbírej hvězdy, vyhýbej se hrotům", cw/2, ch*0.46);
        ctx.fillStyle = "#4ade80"; ctx.font = `bold ${Math.min(17, cw * 0.043)}px Arial, sans-serif`; ctx.fillText("Klepni na obrazovku pro start", cw/2, ch*0.55);
        ctx.textAlign = "left";
      }
      if (s?.gameOver) {
        ctx.fillStyle = "rgba(0,0,0,0.62)"; ctx.fillRect(0, 0, cw, ch);
        ctx.textAlign = "center";
        ctx.fillStyle = "#ef4444"; ctx.font = `bold ${Math.min(44, cw * 0.1)}px 'Arial Black', sans-serif`; ctx.fillText("GAME OVER", cw/2, ch*0.37);
        ctx.fillStyle = "white"; ctx.font = `bold ${Math.min(22, cw * 0.055)}px Arial, sans-serif`; ctx.fillText(`Skóre: ${s.score} ★`, cw/2, ch*0.48);
        ctx.fillStyle = "#4ade80"; ctx.font = `bold ${Math.min(16, cw * 0.04)}px Arial, sans-serif`; ctx.fillText("Klepni pro restart", cw/2, ch*0.58);
        ctx.textAlign = "left";
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup",   offKey);
    };
  }, [isSignedIn, initState, resetGame, submitScore]);

  const onCanvasClick = useCallback(() => {
    const s = stateRef.current; if (!s) return;
    if (!s.started) { s.started = true; setDisplay(d => ({ ...d, started: true })); return; }
    if (s.gameOver) { resetGame(); return; }
    if (s.ball.onGround) s.ball.vy = -12;
  }, [resetGame]);

  const onLeft  = useCallback((v: boolean) => { if (stateRef.current) stateRef.current.left  = v; }, []);
  const onRight = useCallback((v: boolean) => { if (stateRef.current) stateRef.current.right = v; }, []);

  // ── Not signed in ──────────────────────────────────────────────────────────
  if (!isLoaded || !isSignedIn) {
    return (
      <PageLayout title="Bounce" backPath="/">
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 32px", gap: "20px" }}>
          <div style={{ fontSize: "3rem" }}>🔒</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "white", fontWeight: 900, fontSize: "1.2rem", marginBottom: "8px" }}>Přihlášení vyžadováno</div>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.5 }}>Pro hraní Bounce je potřeba být přihlášen.</div>
          </div>
          {isLoaded && (
            <button
              onClick={() => openSignIn()}
              style={{
                padding: "13px 32px", borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(239,68,68,0.22), rgba(239,68,68,0.12))",
                border: "1px solid rgba(239,68,68,0.45)",
                color: "#fca5a5", fontWeight: 800, fontSize: "0.95rem",
                cursor: "pointer", letterSpacing: "0.05em",
              }}
            >Přihlásit se</button>
          )}
        </div>
      </PageLayout>
    );
  }

  // ── Trophy button ──────────────────────────────────────────────────────────
  const trophyBtn = (
    <button
      onClick={() => { setShowLeaderboard(v => !v); fetchTop(); }}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 38, height: 38, borderRadius: "12px",
        background: showLeaderboard ? "rgba(251,191,36,0.25)" : "rgba(255,255,255,0.08)",
        border: `1px solid ${showLeaderboard ? "rgba(251,191,36,0.5)" : "rgba(255,255,255,0.12)"}`,
        cursor: "pointer",
      }}
    >
      <Trophy size={18} color={showLeaderboard ? "#fbbf24" : "rgba(255,255,255,0.6)"} />
    </button>
  );

  return (
    <PageLayout title="Bounce" backPath="/" rightSlot={trophyBtn}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "calc(100dvh - 71px)" }}>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          onClick={onCanvasClick}
          style={{ flex: 1, width: "100%", display: "block", touchAction: "none" }}
        />

        {/* Controls bar */}
        <div style={{
          display: "flex", alignItems: "center",
          padding: "8px 16px 16px", background: "rgba(0,0,0,0.7)",
          borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0, gap: "8px",
        }}>
          {/* ◀ ▶ vedle sebe vlevo */}
          <div style={{ display: "flex", gap: "6px" }}>
            {([["◀", onLeft], ["▶", onRight]] as const).map(([label, handler]) => (
              <button
                key={label}
                onPointerDown={() => handler(true)}
                onPointerUp={() => handler(false)}
                onPointerLeave={() => handler(false)}
                style={{
                  width: 64, height: 50, borderRadius: "12px",
                  background: "rgba(255,255,255,0.09)", border: "2px solid rgba(255,255,255,0.18)",
                  color: "white", fontSize: "1.4rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  userSelect: "none", WebkitUserSelect: "none",
                }}
              >{label}</button>
            ))}
          </div>

          {/* Hint */}
          <div style={{ flex: 1, color: "rgba(255,255,255,0.25)", fontSize: "0.62rem", textAlign: "center", lineHeight: 1.5 }}>
            klepni na<br />hřiště → skok
          </div>

          {/* Lives */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: 11, height: 11, borderRadius: "50%",
                  background: i < display.lives ? "#ef4444" : "rgba(255,255,255,0.12)",
                  boxShadow: i < display.lives ? "0 0 5px #ef4444" : "none",
                  transition: "all 0.3s",
                }} />
              ))}
            </div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.58rem" }}>ŽIVOTY</div>
          </div>
        </div>

        {/* Leaderboard bottom sheet */}
        {showLeaderboard && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "rgba(6,10,20,0.98)",
            borderTop: "1px solid rgba(251,191,36,0.25)",
            borderRadius: "20px 20px 0 0",
            padding: "18px 20px 32px", zIndex: 20,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Trophy size={16} color="#fbbf24" />
                <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.07em" }}>TOP HRÁČI – BOUNCE</span>
              </div>
              <button
                onClick={() => setShowLeaderboard(false)}
                style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "8px", width: 28, height: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <X size={14} color="rgba(255,255,255,0.6)" />
              </button>
            </div>

            {topScores.length === 0 ? (
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textAlign: "center", margin: "16px 0" }}>
                Zatím žádné skóre — buď první!
              </p>
            ) : topScores.map((sc, i) => {
              const medals = ["🥇","🥈","🥉","4.","5."];
              const colors  = ["#f59e0b","#9ca3af","#cd7c34","rgba(255,255,255,0.5)","rgba(255,255,255,0.4)"];
              return (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "28px 1fr auto",
                  alignItems: "center", gap: "10px",
                  padding: "10px 0",
                  borderBottom: i < topScores.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <span style={{ fontSize: "1.1rem", textAlign: "center" }}>{medals[i]}</span>
                  <span style={{ color: "white", fontSize: "0.9rem", fontWeight: 600 }}>{sc.player_name}</span>
                  <span style={{ color: colors[i], fontWeight: 800, fontSize: "0.95rem" }}>{sc.score} ★</span>
                </div>
              );
            })}

            {display.score > 0 && (
              <div style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                Tvoje aktuální skóre: <span style={{ color: "#fbbf24", fontWeight: 800 }}>{display.score} ★</span>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
