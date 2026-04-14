import { useEffect, useRef, useState, useCallback } from "react";
import { useUser } from "@clerk/react";
import { Trophy, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const W = 390;
const H = 720;
const GROUND = 490;
const PLAYER_W = 28;
const PLAYER_H = 36;
const PLAYER_X = 55;
const GRAVITY = 0.55;
const JUMP_V = -13;

interface Obstacle { x: number; w: number; h: number; }

function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export default function GamePage() {
  const { user } = useUser();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    playerY: GROUND - PLAYER_H,
    velY: 0,
    onGround: true,
    obstacles: [] as Obstacle[],
    score: 0,
    speed: 3.2,
    frameCount: 0,
    running: false,
    dead: false,
    nextObstacle: 80,
    legPhase: 0,
  });
  const rafRef = useRef<number>(0);
  const [display, setDisplay] = useState<{ score: number; dead: boolean; started: boolean }>({ score: 0, dead: false, started: false });
  const [topScores, setTopScores] = useState<{ player_name: string; score: number }[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const scoreSentRef = useRef(false);

  const fetchTop = useCallback(async () => {
    try {
      const res = await fetch("/api/game-scores/top");
      const data = await res.json();
      if (data.scores) setTopScores(data.scores);
    } catch {}
  }, []);

  useEffect(() => { fetchTop(); }, [fetchTop]);

  function jump() {
    const s = stateRef.current;
    if (s.dead) { restart(); return; }
    if (!s.running) { s.running = true; setDisplay(d => ({ ...d, started: true })); }
    if (s.onGround) { s.velY = JUMP_V; s.onGround = false; }
  }

  function restart() {
    const s = stateRef.current;
    s.playerY = GROUND - PLAYER_H;
    s.velY = 0;
    s.onGround = true;
    s.obstacles = [];
    s.score = 0;
    s.speed = 3.2;
    s.frameCount = 0;
    s.running = true;
    s.dead = false;
    s.nextObstacle = 80;
    s.legPhase = 0;
    scoreSentRef.current = false;
    setDisplay({ score: 0, dead: false, started: true });
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function loop() {
      const s = stateRef.current;
      ctx.clearRect(0, 0, W, H);

      // Sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, GROUND);
      sky.addColorStop(0, "#060f1a");
      sky.addColorStop(0.5, "#0a1a2a");
      sky.addColorStop(1, "#0d2a1a");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // Stars
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      [[30,30],[90,20],[150,45],[220,15],[290,38],[340,25],[60,60],[180,12],[310,55],[140,28],[260,50]].forEach(([x,y]) => {
        ctx.fillRect(x, y, 1.5, 1.5);
      });

      // Moon
      ctx.fillStyle = "rgba(255,250,220,0.8)";
      ctx.beginPath(); ctx.arc(340, 60, 18, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#0a1628";
      ctx.beginPath(); ctx.arc(347, 55, 15, 0, Math.PI * 2); ctx.fill();

      // Distant trees (silhouettes)
      ctx.fillStyle = "rgba(10,30,15,0.7)";
      [0,30,65,105,140,175,210,255,295,330,360].forEach(tx => {
        const th = 40 + ((tx * 7) % 30);
        ctx.beginPath();
        ctx.moveTo(tx, GROUND);
        ctx.lineTo(tx + 15, GROUND - th);
        ctx.lineTo(tx + 30, GROUND);
        ctx.fill();
      });

      // Ground
      const grd = ctx.createLinearGradient(0, GROUND, 0, H);
      grd.addColorStop(0, "#1a5e38");
      grd.addColorStop(0.2, "#174d2e");
      grd.addColorStop(1, "#081510");
      ctx.fillStyle = grd;
      ctx.fillRect(0, GROUND, W, H - GROUND);

      // Ground line glow
      ctx.shadowColor = "rgba(74,222,128,0.4)";
      ctx.shadowBlur = 6;
      ctx.strokeStyle = "rgba(74,222,128,0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, GROUND); ctx.lineTo(W, GROUND); ctx.stroke();
      ctx.shadowBlur = 0;

      // Grass tufts
      ctx.strokeStyle = "rgba(74,222,128,0.55)";
      ctx.lineWidth = 1.5;
      [15, 40, 75, 110, 145, 190, 235, 270, 310, 345, 370].forEach(gx => {
        const scroll = s.running ? s.frameCount * s.speed * 0.4 : 0;
        const bx = ((gx - scroll % (W + 40)) + W + 40) % (W + 40) - 20;
        ctx.beginPath(); ctx.moveTo(bx, GROUND); ctx.lineTo(bx - 3, GROUND - 9); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(bx + 5, GROUND); ctx.lineTo(bx + 5, GROUND - 12); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(bx + 10, GROUND); ctx.lineTo(bx + 13, GROUND - 8); ctx.stroke();
      });

      if (s.running && !s.dead) {
        s.frameCount++;
        s.legPhase += 0.25;

        s.velY += GRAVITY;
        s.playerY += s.velY;
        if (s.playerY >= GROUND - PLAYER_H) {
          s.playerY = GROUND - PLAYER_H;
          s.velY = 0;
          s.onGround = true;
        } else {
          s.onGround = false;
        }

        s.speed = 3.2 + s.frameCount * 0.001;
        s.score = Math.floor(s.frameCount / 6);

        s.nextObstacle--;
        if (s.nextObstacle <= 0) {
          const h = 22 + Math.random() * 26;
          s.obstacles.push({ x: W + 10, w: 16 + Math.random() * 12, h });
          s.nextObstacle = 58 + Math.random() * 60;
        }
        s.obstacles = s.obstacles.filter(o => o.x + o.w > -10);
        s.obstacles.forEach(o => { o.x -= s.speed; });

        const px = PLAYER_X + 4, py = s.playerY + 4, pw = PLAYER_W - 8, ph = PLAYER_H - 4;
        for (const o of s.obstacles) {
          if (px < o.x + o.w && px + pw > o.x && py < GROUND && py + ph > GROUND - o.h) {
            s.dead = true;
            const finalScore = s.score;
            setDisplay({ score: finalScore, dead: true, started: true });
            if (!scoreSentRef.current) {
              scoreSentRef.current = true;
              const playerName = user
                ? (user.fullName || user.firstName || user.username || "Turista")
                : null;
              if (playerName) {
                fetch("/api/game-scores", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({ score: finalScore, playerName }),
                }).then(() => fetchTop()).catch(() => {});
              } else {
                fetchTop();
              }
            }
            break;
          }
        }

        setDisplay(d => ({ ...d, score: s.score }));
      }

      // Draw obstacles
      s.obstacles.forEach(o => {
        ctx.fillStyle = "#4a3020";
        drawRoundRect(ctx, o.x, GROUND - o.h, o.w, o.h, 4);
        ctx.fill();
        ctx.fillStyle = "#6a4a30";
        drawRoundRect(ctx, o.x + 2, GROUND - o.h, o.w - 4, o.h * 0.35, 3);
        ctx.fill();
      });

      // Draw player
      const px = PLAYER_X;
      const py = s.playerY;
      const jumping = !s.onGround;
      const legAngle = s.running && !s.dead ? Math.sin(s.legPhase) * (jumping ? 0 : 0.4) : 0;

      ctx.fillStyle = "#16a34a";
      drawRoundRect(ctx, px + 14, py + 8, 10, 14, 3); ctx.fill();
      ctx.fillStyle = "#4ade80";
      drawRoundRect(ctx, px + 4, py + 10, 18, 16, 4); ctx.fill();
      ctx.fillStyle = "#f5c97a";
      ctx.beginPath(); ctx.arc(px + 13, py + 7, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#854d0e";
      ctx.fillRect(px + 6, py + 2, 14, 3);
      ctx.fillRect(px + 9, py - 3, 8, 6);

      ctx.strokeStyle = "#166534";
      ctx.lineWidth = 4; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(px + 9, py + 26); ctx.lineTo(px + 9 - Math.sin(legAngle) * 8, py + 36); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px + 17, py + 26); ctx.lineTo(px + 17 + Math.sin(legAngle) * 8, py + 36); ctx.stroke();

      ctx.strokeStyle = "#a16207"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(px + 22, py + 14); ctx.lineTo(px + 26, py + 36); ctx.stroke();

      // Score on canvas (top-left)
      if (s.started || s.score > 0) {
        ctx.font = "bold 20px system-ui";
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillText(`${s.score} m`, 17, 43);
        ctx.fillStyle = "#4ade80";
        ctx.fillText(`${s.score} m`, 16, 42);
      }

      // Start screen
      if (!s.running && !s.dead) {
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(0, 0, W, H);
        ctx.font = "bold 22px system-ui";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("TAP PRO START", W / 2, GROUND / 2 - 10);
        ctx.font = "15px system-ui";
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.fillText("Přeskakuj kameny!", W / 2, GROUND / 2 + 18);
        ctx.textAlign = "left";
      }

      // Dead screen overlay
      if (s.dead) {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0, 0, W, H);
        ctx.font = "bold 26px system-ui";
        ctx.fillStyle = "#f87171";
        ctx.textAlign = "center";
        ctx.fillText("AUVÁ! 🪨", W / 2, GROUND / 2 - 20);
        ctx.font = "bold 18px system-ui";
        ctx.fillStyle = "white";
        ctx.fillText(`${s.score} m`, W / 2, GROUND / 2 + 14);
        ctx.font = "14px system-ui";
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText("tap pro restart", W / 2, GROUND / 2 + 42);
        ctx.textAlign = "left";
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const trophyBtn = (
    <button
      onClick={() => setShowLeaderboard(v => !v)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 38, height: 38, borderRadius: "12px",
        background: showLeaderboard ? "rgba(245,158,11,0.25)" : "rgba(255,255,255,0.08)",
        border: `1px solid ${showLeaderboard ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.12)"}`,
        cursor: "pointer",
      }}
    >
      <Trophy size={18} color={showLeaderboard ? "#f59e0b" : "rgba(255,255,255,0.6)"} />
    </button>
  );

  return (
    <PageLayout title="Mini hra" backPath="/" rightSlot={trophyBtn}>
      <div style={{ position: "relative", lineHeight: 0 }}>
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onClick={jump}
          onTouchStart={(e) => { e.preventDefault(); jump(); }}
          style={{
            width: "100%",
            height: "calc(100dvh - 71px)",
            display: "block",
            touchAction: "none",
            cursor: "pointer",
          }}
        />

        {/* Leaderboard overlay */}
        {showLeaderboard && (
          <div
            style={{
              position: "absolute",
              top: 0, right: 0,
              width: "220px",
              background: "rgba(10,20,15,0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(74,222,128,0.2)",
              borderRadius: "0 0 0 16px",
              padding: "14px 16px",
              zIndex: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Trophy size={14} color="#f59e0b" />
                <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em" }}>
                  TOP 3 HRÁČI
                </span>
              </div>
              <button
                onClick={() => setShowLeaderboard(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
              >
                <X size={14} color="rgba(255,255,255,0.4)" />
              </button>
            </div>
            {topScores.length === 0 ? (
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", textAlign: "center", padding: "8px 0" }}>
                Zatím žádné skóre
              </div>
            ) : topScores.map((sc, i) => {
              const medals = ["🥇", "🥈", "🥉"];
              const colors = ["#f59e0b", "#9ca3af", "#cd7c34"];
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "6px 0",
                  borderBottom: i < topScores.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{medals[i]}</span>
                  <span style={{ flex: 1, minWidth: 0, color: "white", fontSize: "0.80rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {sc.player_name}
                  </span>
                  <span style={{ color: colors[i], fontWeight: 700, fontSize: "0.82rem", flexShrink: 0, paddingLeft: "6px" }}>
                    {sc.score} m
                  </span>
                </div>
              );
            })}

            {display.score > 0 && (
              <div style={{
                marginTop: "12px", paddingTop: "10px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", textAlign: "center",
              }}>
                Tvoje skóre: <span style={{ color: "#4ade80", fontWeight: 700 }}>{display.score} m</span>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
