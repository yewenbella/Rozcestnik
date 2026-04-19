import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const GRAVITY    = 0.52;
const BOUNCE_F   = 0.60;   // velocity kept after bounce
const BALL_R     = 15;
const MOVE_SPD   = 3.8;
const CHUNK_LEN  = 1400;   // world units generated per chunk
const CAM_LEAD   = 0.38;   // camera keeps ball at 38% of width

const PLATFORM_COLORS = ["#1d4ed8", "#7c3aed", "#0e7490", "#15803d", "#b45309"];

// ─── Types ────────────────────────────────────────────────────────────────────
interface Plat  { x: number; y: number; w: number; h: number; color: string; }
interface Star  { x: number; y: number; collected: boolean; t: number; }
interface Spike { x: number; y: number; w: number; h: number; }
interface Ball  {
  x: number; y: number;
  vx: number; vy: number;
  onGround: boolean;
  squish: number;   // 1 = normal; bounce squishes it
  squishV: number;  // velocity toward 1
}

// ─── Level generator ─────────────────────────────────────────────────────────
function genChunk(fromX: number, floorY: number) {
  const plats: Plat[]  = [];
  const stars: Star[]  = [];
  const spikes: Spike[] = [];

  let cx = fromX + 80;
  while (cx < fromX + CHUNK_LEN) {
    const w   = 80 + Math.random() * 140;
    const gap = 55 + Math.random() * 95;
    const py  = floorY * (0.32 + Math.random() * 0.42);
    const col = PLATFORM_COLORS[Math.floor(Math.random() * PLATFORM_COLORS.length)];
    plats.push({ x: cx, y: py, w, h: 18, color: col });

    // stars above platform
    const ns = 1 + Math.floor(Math.random() * 4);
    for (let i = 0; i < ns; i++) {
      stars.push({ x: cx + (w / (ns + 1)) * (i + 1), y: py - 30, collected: false, t: Math.random() * Math.PI * 2 });
    }

    // occasional spike on platform
    if (Math.random() < 0.28 && w > 90) {
      const sx = cx + 18 + Math.random() * (w - 50);
      spikes.push({ x: sx - 10, y: py - 20, w: 22, h: 20 });
    }

    cx += w + gap;
  }

  // floor stars
  for (let fx = fromX + 40; fx < fromX + CHUNK_LEN; fx += 130 + Math.random() * 90) {
    stars.push({ x: fx + Math.random() * 60, y: floorY - 36, collected: false, t: Math.random() * Math.PI * 2 });
  }

  // floor spikes (sparser)
  for (let fx = fromX + 220; fx < fromX + CHUNK_LEN - 100; fx += 280 + Math.random() * 200) {
    if (Math.random() < 0.45) spikes.push({ x: fx, y: floorY - 22, w: 24, h: 22 });
  }

  return { plats, stars, spikes };
}

// ─── Drawing helpers ──────────────────────────────────────────────────────────
function drawBall(ctx: CanvasRenderingContext2D, ball: Ball, invincible: boolean) {
  const sx = 1 + (1 - ball.squish) * 0.6;  // horizontal stretch when squished
  const sy = ball.squish;
  ctx.save();
  ctx.translate(ball.x, ball.y);
  ctx.scale(sx, sy);
  // shadow
  ctx.beginPath();
  ctx.ellipse(0, BALL_R * 0.85, BALL_R * sx * 0.9, BALL_R * 0.22, 0, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.28)";
  ctx.fill();
  // main body
  ctx.beginPath();
  ctx.arc(0, 0, BALL_R, 0, Math.PI * 2);
  const grad = ctx.createRadialGradient(-4, -5, 2, 0, 0, BALL_R);
  grad.addColorStop(0, invincible ? "#fbcfe8" : "#fca5a5");
  grad.addColorStop(0.5, invincible ? "#ec4899" : "#ef4444");
  grad.addColorStop(1,   invincible ? "#831843" : "#991b1b");
  ctx.fillStyle = grad;
  ctx.fill();
  // shine
  ctx.beginPath();
  ctx.ellipse(-5, -6, 5, 3.5, -0.5, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.fill();
  ctx.restore();
}

function drawPlatform(ctx: CanvasRenderingContext2D, p: Plat, camX: number) {
  const sx = p.x - camX;
  ctx.beginPath();
  ctx.roundRect(sx, p.y, p.w, p.h, 5);
  ctx.fillStyle = p.color;
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(sx, p.y, p.w, 5, [5, 5, 0, 0]);
  ctx.fillStyle = "rgba(255,255,255,0.22)";
  ctx.fill();
}

function drawStar(ctx: CanvasRenderingContext2D, s: Star, camX: number) {
  if (s.collected) return;
  const sx = s.x - camX;
  const t  = s.t;
  const r1 = 9, r2 = 4, pts = 5;
  ctx.save();
  ctx.translate(sx, s.y + Math.sin(t * 2) * 2);
  ctx.rotate(t * 0.6);
  ctx.beginPath();
  for (let i = 0; i < pts * 2; i++) {
    const angle = (i * Math.PI) / pts - Math.PI / 2;
    const r = i % 2 === 0 ? r1 : r2;
    if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
    else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
  }
  ctx.closePath();
  ctx.fillStyle = "#fbbf24";
  ctx.fill();
  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

function drawSpike(ctx: CanvasRenderingContext2D, sp: Spike, camX: number) {
  const sx = sp.x - camX;
  ctx.beginPath();
  ctx.moveTo(sx + sp.w / 2, sp.y);
  ctx.lineTo(sx + sp.w, sp.y + sp.h);
  ctx.lineTo(sx, sp.y + sp.h);
  ctx.closePath();
  ctx.fillStyle = "#94a3b8";
  ctx.fill();
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawFloor(ctx: CanvasRenderingContext2D, floorY: number, cw: number) {
  const grad = ctx.createLinearGradient(0, floorY, 0, floorY + 40);
  grad.addColorStop(0, "#1e3a5f");
  grad.addColorStop(1, "#0f172a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, floorY, cw, 40);
  ctx.fillStyle = "rgba(56,189,248,0.35)";
  ctx.fillRect(0, floorY, cw, 3);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function BouncePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<{
    ball: Ball; plats: Plat[]; stars: Star[]; spikes: Spike[];
    score: number; lives: number; camX: number; genX: number;
    invincible: number; gameOver: boolean; started: boolean;
    left: boolean; right: boolean; keys: Set<string>;
  } | null>(null);
  const rafRef    = useRef<number>(0);
  const [display, setDisplay] = useState({ score: 0, lives: 3, gameOver: false, started: false });
  const [, navigate] = useLocation();

  const initState = useCallback((cw: number, ch: number) => {
    const floorY = ch * 0.78;
    const startX = 80;
    const startY = floorY - BALL_R - 1;
    const ball: Ball = { x: startX, y: startY, vx: 0, vy: 0, onGround: true, squish: 1, squishV: 0 };
    const first = genChunk(0, floorY);
    stateRef.current = {
      ball, plats: first.plats, stars: first.stars, spikes: first.spikes,
      score: 0, lives: 3, camX: 0, genX: CHUNK_LEN,
      invincible: 0, gameOver: false, started: false,
      left: false, right: false, keys: new Set(),
    };
  }, []);

  const resetGame = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    initState(c.width, c.height);
    setDisplay({ score: 0, lives: 3, gameOver: false, started: false });
  }, [initState]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const resize = () => {
      c.width  = c.offsetWidth;
      c.height = c.offsetHeight;
      if (!stateRef.current || stateRef.current.gameOver) initState(c.width, c.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // keyboard
    const onKey = (e: KeyboardEvent) => {
      const s = stateRef.current;
      if (!s) return;
      s.keys.add(e.key);
      if ((e.key === " " || e.key === "ArrowUp") && !s.started) { s.started = true; setDisplay(d => ({ ...d, started: true })); }
      if (s.gameOver && e.key === " ") resetGame();
    };
    const offKey = (e: KeyboardEvent) => { stateRef.current?.keys.delete(e.key); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup",   offKey);

    // main loop
    const loop = () => {
      const s = stateRef.current;
      if (!s || !c) { rafRef.current = requestAnimationFrame(loop); return; }

      const ctx = c.getContext("2d")!;
      const cw = c.width, ch = c.height;
      const floorY = ch * 0.78;

      // ── Update ──────────────────────────────────────────────────────────────
      if (s.started && !s.gameOver) {
        const { ball } = s;

        // Input
        const left  = s.left  || s.keys.has("ArrowLeft")  || s.keys.has("a");
        const right = s.right || s.keys.has("ArrowRight") || s.keys.has("d");
        if (left)  ball.vx = Math.max(ball.vx - 0.7, -MOVE_SPD);
        if (right) ball.vx = Math.min(ball.vx + 0.7,  MOVE_SPD);
        if (!left && !right) ball.vx *= 0.88;

        // Physics
        ball.vy += GRAVITY;
        ball.x  += ball.vx;
        ball.y  += ball.vy;

        ball.onGround = false;

        // Floor collision
        if (ball.y + BALL_R >= floorY) {
          ball.y  = floorY - BALL_R;
          ball.vy = -(Math.abs(ball.vy) * BOUNCE_F);
          ball.onGround = true;
          if (Math.abs(ball.vy) < 1.5) ball.vy = 0;
          ball.squish  = 0.6;
          ball.squishV = 0.08;
        }

        // Platform collision
        for (const p of s.plats) {
          const bx = ball.x, by = ball.y;
          if (bx + BALL_R > p.x && bx - BALL_R < p.x + p.w &&
              by + BALL_R > p.y && by - BALL_R < p.y + p.h) {
            // coming from above
            if (ball.vy > 0 && by - BALL_R < p.y) {
              ball.y  = p.y - BALL_R;
              ball.vy = -(Math.abs(ball.vy) * BOUNCE_F);
              ball.onGround = true;
              if (Math.abs(ball.vy) < 1.5) ball.vy = 0;
              ball.squish  = 0.62;
              ball.squishV = 0.07;
            } else if (ball.vy < 0 && by + BALL_R > p.y + p.h) {
              ball.y  = p.y + p.h + BALL_R;
              ball.vy = Math.abs(ball.vy) * 0.3;
            } else if (bx < p.x + p.w / 2) {
              ball.x  = p.x - BALL_R;
              ball.vx = -Math.abs(ball.vx) * 0.4;
            } else {
              ball.x  = p.x + p.w + BALL_R;
              ball.vx = Math.abs(ball.vx) * 0.4;
            }
          }
        }

        // Ceiling
        if (ball.y - BALL_R < 0) { ball.y = BALL_R; ball.vy = Math.abs(ball.vy) * 0.4; }

        // Squish animation
        if (ball.squish < 1) {
          ball.squish  = Math.min(1, ball.squish + ball.squishV);
          ball.squishV = Math.min(ball.squishV + 0.005, 0.12);
        }

        // Camera
        const targetCamX = ball.x - cw * CAM_LEAD;
        s.camX += (targetCamX - s.camX) * 0.10;
        if (s.camX < 0) s.camX = 0;

        // Generate more level
        if (ball.x + cw > s.genX) {
          const chunk = genChunk(s.genX, floorY);
          s.plats  = [...s.plats,  ...chunk.plats];
          s.stars  = [...s.stars,  ...chunk.stars];
          s.spikes = [...s.spikes, ...chunk.spikes];
          s.genX  += CHUNK_LEN;
        }

        // Cull far-left objects
        const cullX = s.camX - 200;
        s.plats  = s.plats.filter(p  => p.x + p.w > cullX);
        s.stars  = s.stars.filter(st => st.x       > cullX);
        s.spikes = s.spikes.filter(sp => sp.x + sp.w > cullX);

        // Star tick (rotation/float)
        for (const st of s.stars) st.t += 0.04;

        // Star collection
        for (const st of s.stars) {
          if (st.collected) continue;
          if (Math.hypot(ball.x - st.x, ball.y - st.y) < BALL_R + 10) {
            st.collected = true;
            s.score += 10;
          }
        }

        // Spike collision
        if (s.invincible === 0) {
          for (const sp of s.spikes) {
            if (ball.x + BALL_R - 4 > sp.x && ball.x - BALL_R + 4 < sp.x + sp.w &&
                ball.y + BALL_R - 4 > sp.y && ball.y - BALL_R + 4 < sp.y + sp.h) {
              s.lives--;
              s.invincible = 120;
              ball.vy = -10;
              ball.vx = ball.vx > 0 ? -4 : 4;
              if (s.lives <= 0) s.gameOver = true;
              break;
            }
          }
        } else {
          s.invincible--;
        }

        // Fall off bottom
        if (ball.y > ch + 60) {
          s.lives--;
          ball.x = s.camX + cw * 0.3;
          ball.y = floorY - BALL_R - 1;
          ball.vx = 0; ball.vy = 0;
          s.invincible = 90;
          if (s.lives <= 0) s.gameOver = true;
        }

        setDisplay({ score: s.score, lives: s.lives, gameOver: s.gameOver, started: s.started });
      }

      // ── Draw ────────────────────────────────────────────────────────────────
      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, 0, ch);
      bg.addColorStop(0,   "#020617");
      bg.addColorStop(0.5, "#0c1a35");
      bg.addColorStop(1,   "#0f172a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, cw, ch);

      // Stars background (static dots)
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      // deterministic "random" dots from seed
      for (let i = 0; i < 60; i++) {
        const bx = ((i * 137 + 31) % cw);
        const by = ((i * 97  + 17) % (ch * 0.75));
        ctx.fillRect(bx, by, 1.2, 1.2);
      }

      // Floor
      drawFloor(ctx, floorY, cw);

      // Platforms
      for (const p of s?.plats ?? []) {
        const sx = p.x - (s?.camX ?? 0);
        if (sx + p.w < -10 || sx > cw + 10) continue;
        drawPlatform(ctx, p, s?.camX ?? 0);
      }

      // Stars
      for (const st of s?.stars ?? []) {
        if (st.collected) continue;
        const sx = st.x - (s?.camX ?? 0);
        if (sx < -20 || sx > cw + 20) continue;
        drawStar(ctx, st, s?.camX ?? 0);
      }

      // Spikes
      for (const sp of s?.spikes ?? []) {
        const sx = sp.x - (s?.camX ?? 0);
        if (sx + sp.w < -10 || sx > cw + 10) continue;
        drawSpike(ctx, sp, s?.camX ?? 0);
      }

      // Ball
      if (s) drawBall(ctx, s.ball, s.invincible > 0 && Math.floor(s.invincible / 6) % 2 === 0);

      // Overlays (start / game over)
      if (s && !s.started) {
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fillRect(0, 0, cw, ch);
        ctx.textAlign = "center";
        ctx.fillStyle = "#fbbf24";
        ctx.font = `bold ${Math.min(42, cw * 0.1)}px 'Arial Black', sans-serif`;
        ctx.fillText("BOUNCE", cw / 2, ch * 0.38);
        ctx.font = `bold ${Math.min(16, cw * 0.04)}px Arial, sans-serif`;
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillText("Sbírej hvězdy, vyhýbej se hrotům", cw / 2, ch * 0.47);
        ctx.fillStyle = "#4ade80";
        ctx.font = `bold ${Math.min(18, cw * 0.045)}px Arial, sans-serif`;
        ctx.fillText("Klepni na obrazovku pro start", cw / 2, ch * 0.56);
      }

      if (s?.gameOver) {
        ctx.fillStyle = "rgba(0,0,0,0.62)";
        ctx.fillRect(0, 0, cw, ch);
        ctx.textAlign = "center";
        ctx.fillStyle = "#ef4444";
        ctx.font = `bold ${Math.min(44, cw * 0.1)}px 'Arial Black', sans-serif`;
        ctx.fillText("GAME OVER", cw / 2, ch * 0.38);
        ctx.fillStyle = "white";
        ctx.font = `bold ${Math.min(22, cw * 0.055)}px Arial, sans-serif`;
        ctx.fillText(`Skóre: ${s.score}`, cw / 2, ch * 0.49);
        ctx.fillStyle = "#4ade80";
        ctx.font = `bold ${Math.min(16, cw * 0.04)}px Arial, sans-serif`;
        ctx.fillText("Klepni pro restart", cw / 2, ch * 0.59);
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
  }, [initState, resetGame]);

  // Touch / click handler on canvas
  const onCanvasClick = useCallback(() => {
    const s = stateRef.current;
    if (!s) return;
    if (!s.started) { s.started = true; setDisplay(d => ({ ...d, started: true })); return; }
    if (s.gameOver) { resetGame(); return; }
    // tap to jump when on ground (optional extra mechanic)
    if (s.ball.onGround) { s.ball.vy = -12; }
  }, [resetGame]);

  // On-screen button handlers
  const onLeft  = useCallback((active: boolean) => { if (stateRef.current) stateRef.current.left  = active; }, []);
  const onRight = useCallback((active: boolean) => { if (stateRef.current) stateRef.current.right = active; }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#020617", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px", background: "rgba(0,0,0,0.6)",
        borderBottom: "1px solid rgba(251,191,36,0.25)", flexShrink: 0, zIndex: 10,
      }}>
        <button
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer", padding: "4px 8px", borderRadius: "8px" }}
        >
          <ArrowLeft size={16} />
          <span style={{ fontSize: "0.80rem", fontWeight: 700 }}>Zpět</span>
        </button>

        <span style={{ color: "#fbbf24", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.12em" }}>BOUNCE</span>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "1rem" }}>{display.score}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.58rem" }}>SKÓRE</div>
          </div>
          <div style={{ display: "flex", gap: "3px" }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: "50%",
                background: i < display.lives ? "#ef4444" : "rgba(255,255,255,0.15)",
                boxShadow: i < display.lives ? "0 0 4px #ef4444" : "none",
                transition: "all 0.3s",
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onClick={onCanvasClick}
        style={{ flex: 1, width: "100%", display: "block", touchAction: "none" }}
      />

      {/* On-screen controls */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "10px 16px 20px", background: "rgba(0,0,0,0.55)",
        borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0, gap: "12px",
      }}>
        {/* Left button */}
        <button
          onPointerDown={() => onLeft(true)}
          onPointerUp={() => onLeft(false)}
          onPointerLeave={() => onLeft(false)}
          style={{
            width: 72, height: 52, borderRadius: "14px",
            background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.18)",
            color: "white", fontSize: "1.5rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            userSelect: "none", WebkitUserSelect: "none",
          }}
        >◀</button>

        {/* Jump hint */}
        <div style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.65rem", textAlign: "center", lineHeight: 1.4 }}>
          klepni na<br />hřiště pro skok
        </div>

        {/* Right button */}
        <button
          onPointerDown={() => onRight(true)}
          onPointerUp={() => onRight(false)}
          onPointerLeave={() => onRight(false)}
          style={{
            width: 72, height: 52, borderRadius: "14px",
            background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.18)",
            color: "white", fontSize: "1.5rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            userSelect: "none", WebkitUserSelect: "none",
          }}
        >▶</button>
      </div>
    </div>
  );
}
