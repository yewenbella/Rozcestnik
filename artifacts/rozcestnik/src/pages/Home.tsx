import { useLocation } from "wouter";
import { Map, Route, Trophy, BookOpen } from "lucide-react";
import mountainBg from "@assets/Snímek_obrazovky_2026-04-13_185556_1776100605253.png";

const buttons = [
  {
    label: "MAPA",
    icon: Map,
    path: "/mapa",
    color: "from-emerald-500 to-emerald-600",
    border: "border-emerald-700",
    shadow: "shadow-emerald-900/60",
    glow: "#10b981",
  },
  {
    label: "TRASY",
    icon: Route,
    path: "/trasy",
    color: "from-sky-500 to-sky-600",
    border: "border-sky-700",
    shadow: "shadow-sky-900/60",
    glow: "#0ea5e9",
  },
  {
    label: "ŽEBŘÍČEK",
    icon: Trophy,
    path: "/zebricek",
    color: "from-amber-500 to-orange-500",
    border: "border-amber-700",
    shadow: "shadow-amber-900/60",
    glow: "#f59e0b",
  },
  {
    label: "PRAVIDLA",
    icon: BookOpen,
    path: "/pravidla",
    color: "from-emerald-500 to-emerald-600",
    border: "border-emerald-700",
    shadow: "shadow-emerald-900/60",
    glow: "#10b981",
  },
];

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: "#1a2a1a", maxWidth: "480px", margin: "0 auto", position: "relative" }}
    >
      {/* Hero image area */}
      <div className="relative w-full overflow-hidden" style={{ height: "38vh", minHeight: "220px" }}>
        <img
          src={mountainBg}
          alt="Turistická krajina"
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.75) saturate(1.1)" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,40,20,0.2) 0%, rgba(20,40,20,0.55) 70%, rgba(20,35,20,1) 100%)",
          }}
        />
        {/* Title overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-4">
          <h1
            className="text-white font-extrabold tracking-wide"
            style={{
              fontSize: "clamp(2.4rem, 9vw, 3.4rem)",
              textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)",
              letterSpacing: "0.03em",
            }}
          >
            Rozcestník
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <p
              className="text-white/90 font-medium"
              style={{
                fontSize: "clamp(0.95rem, 4vw, 1.2rem)",
                textShadow: "0 1px 8px rgba(0,0,0,0.8)",
              }}
            >
              Turistická výzva dvojic
            </p>
            <span style={{ fontSize: "1.2rem" }}>🧭</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center mt-2 mb-1">
        <div
          style={{
            width: "72px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #ca8a04, #f59e0b)",
          }}
        />
      </div>

      {/* Buttons — rozcestník style */}
      <div className="flex flex-col gap-3 px-5 mt-5 flex-1">
        {buttons.map(({ label, icon: Icon, path, color, border, shadow, glow }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`
              relative flex items-center gap-4 w-full
              bg-gradient-to-r ${color}
              border-2 ${border}
              rounded-2xl
              shadow-lg ${shadow}
              px-5 py-4
              active:scale-[0.97] transition-all duration-150
              group overflow-hidden
            `}
            style={{
              boxShadow: `0 4px 18px 0 ${glow}55, 0 2px 6px rgba(0,0,0,0.4)`,
              minHeight: "64px",
            }}
          >
            {/* Wood grain texture overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
              }}
            />
            {/* Icon box */}
            <div
              className="flex items-center justify-center rounded-xl shrink-0"
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "rgba(0,0,0,0.2)",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              <Icon size={22} color="white" strokeWidth={2.2} />
            </div>
            {/* Label */}
            <span
              className="font-extrabold text-white tracking-widest"
              style={{
                fontSize: "clamp(1rem, 5vw, 1.15rem)",
                textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                letterSpacing: "0.12em",
              }}
            >
              {label}
            </span>
            {/* Arrow */}
            <div className="ml-auto opacity-70 group-active:opacity-100 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4l6 5-6 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Footer tagline */}
      <div className="flex justify-center pb-8 pt-6">
        <p
          className="text-center"
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.82rem",
            letterSpacing: "0.02em",
          }}
        >
          Vyberte si směr a vydejte se na cestu
        </p>
      </div>
    </div>
  );
}
