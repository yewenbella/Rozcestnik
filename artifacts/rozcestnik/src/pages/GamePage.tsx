import { useEffect, useRef, useState, useCallback } from "react";
import { Trophy } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const W = 360;
const H = 220;
const GROUND = 170;
const PLAYER_W = 28;
const PLAYER_H = 36;
const PLAYER_X = 55;
const GRAVITY = 0.55;
const JUMP_V = -11;

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
  const [topScores, setTopScores] = useState<{ teamName: string; score: number }[]>([]);
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
      sky.addColorStop(0, "#0a1628");
      sky.addColorStop(1, "#0d2a1a");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // Stars (static)
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      [[30,20],[90,15],[150,30],[220,10],[290,25],[340,18],[60,40],[180,8]].forEach(([x,y]) => {
        ctx.fillRect(x, y, 1.5, 1.5);
      });

      // Ground
      const grd = ctx.createLinearGradient(0, GROUND, 0, H);
      grd.addColorStop(0, "#1a4a2e");
      grd.addColorStop(1, "#0d2a1a");
      ctx.fillStyle = grd;
      ctx.fillRect(0, GROUND, W, H - GROUND);

      // Ground line
      ctx.strokeStyle = "rgba(74,222,128,0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, GROUND); ctx.lineTo(W, GROUND); ctx.stroke();

      if (s.running && !s.dead) {
        s.frameCount++;
        s.legPhase += 0.25;

        // Gravity
        s.velY += GRAVITY;
        s.playerY += s.velY;
        if (s.playerY >= GROUND - PLAYER_H) {
          s.playerY = GROUND - PLAYER_H;
          s.velY = 0;
          s.onGround = true;
        } else {
          s.onGround = false;
        }

        // Speed ramp
        s.speed = 3.2 + s.frameCount * 0.001;

        // Score
        s.score = Math.floor(s.frameCount / 6);

        // Obstacles
        s.nextObstacle--;
        if (s.nextObstacle <= 0) {
          const h = 20 + Math.random() * 24;
          s.obstacles.push({ x: W + 10, w: 16 + Math.random() * 10, h });
          s.nextObstacle = 60 + Math.random() * 60;
        }
        s.obstacles = s.obstacles.filter(o => o.x + o.w > -10);
        s.obstacles.forEach(o => { o.x -= s.speed; });

        // Collision
        const px = PLAYER_X + 4, py = s.playerY + 4, pw = PLAYER_W - 8, ph = PLAYER_H - 4;
        for (const o of s.obstacles) {
          if (px < o.x + o.w && px + pw > o.x && py < GROUND && py + ph > GROUND - o.h) {
            s.dead = true;
            const finalScore = s.score;
            setDisplay({ score: finalScore, dead: true, started: true });
            if (!scoreSentRef.current) {
              scoreSentRef.current = true;
              fetch("/api/game-scores", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ score: finalScore }),
              }).then(() => fetchTop()).catch(() => {});
            }
            break;
          }
        }

        setDisplay(d => ({ ...d, score: s.score }));
      }

      // Draw obstacles (rocks)
      s.obstacles.forEach(o => {
        ctx.fillStyle = "#5a3e2b";
        drawRoundRect(ctx, o.x, GROUND - o.h, o.w, o.h, 4);
        ctx.fill();
        ctx.fillStyle = "#7a5a3a";
        drawRoundRect(ctx, o.x + 2, GROUND - o.h, o.w - 4, o.h * 0.4, 3);
        ctx.fill();
      });

      // Draw player (hiker)
      const px = PLAYER_X;
      const py = s.playerY;
      const jumping = !s.onGround;
      const legAngle = s.running && !s.dead ? Math.sin(s.legPhase) * (jumping ? 0 : 0.4) : 0;

      // Backpack
      ctx.fillStyle = "#16a34a";
      drawRoundRect(ctx, px + 14, py + 8, 10, 14, 3);
      ctx.fill();

      // Body
      ctx.fillStyle = "#4ade80";
      drawRoundRect(ctx, px + 4, py + 10, 18, 16, 4);
      ctx.fill();

      // Head
      ctx.fillStyle = "#f5c97a";
      ctx.beginPath();
      ctx.arc(px + 13, py + 7, 7, 0, Math.PI * 2);
      ctx.fill();

      // Hat
      ctx.fillStyle = "#854d0e";
      ctx.fillRect(px + 6, py + 2, 14, 3);
      ctx.fillRect(px + 9, py - 3, 8, 6);

      // Legs
      ctx.strokeStyle = "#166534";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      // Left leg
      ctx.beginPath();
      ctx.moveTo(px + 9, py + 26);
      ctx.lineTo(px + 9 - Math.sin(legAngle) * 8, py + 36);
      ctx.stroke();
      // Right leg
      ctx.beginPath();
      ctx.moveTo(px + 17, py + 26);
      ctx.lineTo(px + 17 + Math.sin(legAngle) * 8, py + 36);
      ctx.stroke();

      // Hiking stick
      ctx.strokeStyle = "#a16207";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(px + 22, py + 14);
      ctx.lineTo(px + 26, py + 36);
      ctx.stroke();

      // Dead flash
      if (s.dead) {
        ctx.fillStyle = "rgba(239,68,68,0.15)";
        ctx.fillRect(0, 0, W, H);
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <PageLayout title="Mini hra" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 16px", gap: "16px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: `${W}px` }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
            {display.started ? "tap = skok" : "tap pro start"}
          </span>
          <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "0.95rem" }}>
            {display.score > 0 ? `${display.score} m` : ""}
          </span>
        </div>

        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onClick={jump}
          onTouchStart={(e) => { e.preventDefault(); jump(); }}
          style={{
            borderRadius: "16px",
            border: "1px solid rgba(74,222,128,0.25)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            touchAction: "none",
            cursor: "pointer",
            maxWidth: "100%",
          }}
        />

        {!display.started && (
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.80rem", textAlign: "center", margin: 0 }}>
            Turisté čekají na autobus — pomoz jim přeskákat kameny!
          </p>
        )}

        {display.dead && (
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#f87171", fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>
              Auvá! 🪨
            </div>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem" }}>
              Ujel jsi {display.score} m — tap pro restart
            </div>
          </div>
        )}

        {/* Leaderboard */}
        <div style={{
          width: "100%", maxWidth: `${W}px`,
          borderRadius: "14px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.10)",
          padding: "14px 16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <Trophy size={14} color="#f59e0b" />
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.06em" }}>
              TOP 3 TÝMY
            </span>
          </div>
          {topScores.length === 0 ? (
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.80rem", textAlign: "center", padding: "8px 0" }}>
              Zatím žádná skóre — buď první!
            </div>
          ) : topScores.map((s, i) => {
            const medals = ["🥇", "🥈", "🥉"];
            const colors = ["#f59e0b", "#9ca3af", "#b45309"];
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "7px 0",
                borderBottom: i < topScores.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{medals[i]}</span>
                <span style={{ flex: 1, color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", fontWeight: 600 }}>
                  {s.teamName}
                </span>
                <span style={{ color: colors[i], fontWeight: 700, fontSize: "0.90rem" }}>
                  {s.score} m
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </PageLayout>
  );
}
