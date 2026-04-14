import { useEffect, useState } from "react";
import { useUser, useClerk } from "@clerk/react";
import { useLocation } from "wouter";
import { Users, Plus, LogIn, Copy, Check, LogOut, Mountain, QrCode, Share2 } from "lucide-react";
import QRCode from "qrcode";
import PageLayout from "@/components/PageLayout";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

interface TeamData {
  id: number;
  name: string;
  inviteCode: string;
  memberCount: number;
}

export default function TeamPage() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [, navigate] = useLocation();

  const [team, setTeam] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"create" | "join">("create");
  const [teamName, setTeamName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState("");

  useEffect(() => {
    if (!isLoaded) return;
    if (!user) {
      navigate(`${BASE}/sign-in`);
      return;
    }
    fetchTeam();
  }, [isLoaded, user]);

  useEffect(() => {
    const url = window.location.origin + (import.meta.env.BASE_URL || "/");
    QRCode.toDataURL(url, { width: 200, margin: 1, color: { dark: "#1a2a1a", light: "#ffffff" } })
      .then(setQrDataUrl)
      .catch(() => {});
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await fetch("/api/teams/me", { credentials: "include" });
      const data = await res.json();
      setTeam(data.team ? { ...data.team, memberCount: data.memberCount } : null);
    } catch {
      setTeam(null);
    } finally {
      setLoading(false);
    }
  };

  const createTeam = async () => {
    if (!teamName.trim()) return setError("Zadej název týmu");
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/teams", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: teamName }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Chyba");
      setTeam({ ...data.team, memberCount: 1 });
    } catch {
      setError("Chyba připojení");
    } finally {
      setSubmitting(false);
    }
  };

  const joinTeam = async () => {
    if (!inviteCode.trim()) return setError("Zadej kód týmu");
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/teams/join", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Chyba");
      setTeam({ ...data.team, memberCount: 2 });
    } catch {
      setError("Chyba připojení");
    } finally {
      setSubmitting(false);
    }
  };

  const leaveTeam = async () => {
    if (!confirm("Opravdu chceš opustit tým?")) return;
    await fetch("/api/teams/leave", { method: "DELETE", credentials: "include" });
    setTeam(null);
  };

  const copyCode = () => {
    if (!team) return;
    navigator.clipboard.writeText(team.inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isLoaded || loading) {
    return (
      <PageLayout title="Tým" backPath="/">
        <div style={centerStyle}>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>Načítám…</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Tým" backPath="/">
      <div style={{ padding: "10px 14px", maxWidth: "480px", margin: "0 auto" }}>

        {/* User info */}
        <div style={{ ...glassCard, padding: "10px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {user?.imageUrl && (
              <img
                src={user.imageUrl}
                alt="avatar"
                style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.2)" }}
              />
            )}
            <div>
              <p style={{ color: "white", fontWeight: 700, fontSize: "0.88rem", margin: 0 }}>
                {user?.fullName || user?.firstName || "Uživatel"}
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", margin: 0 }}>
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
            <button
              onClick={() => signOut({ redirectUrl: "/" })}
              style={{ marginLeft: "auto", ...iconBtn }}
              title="Odhlásit se"
            >
              <LogOut size={15} color="rgba(255,255,255,0.45)" />
            </button>
          </div>
        </div>

        {team ? (
          <>
            {/* Team info */}
            <div style={{ ...glassCard, marginTop: 8, padding: "10px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Mountain size={17} color="#4ade80" />
                <span style={{ color: "white", fontWeight: 800, fontSize: "1rem" }}>{team.name}</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
                  <Users size={12} color="rgba(255,255,255,0.4)" />
                  {team.memberCount} {team.memberCount === 1 ? "člen" : team.memberCount < 5 ? "členové" : "členů"}
                </span>
              </div>

              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: "10px", padding: "10px 12px" }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.70rem", margin: "0 0 3px" }}>
                  Kód pro přizvání
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "white", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.15em" }}>
                    {team.inviteCode}
                  </span>
                  <button onClick={copyCode} style={iconBtn}>
                    {copied
                      ? <Check size={17} color="#4ade80" />
                      : <Copy size={17} color="rgba(255,255,255,0.5)" />
                    }
                  </button>
                </div>
              </div>
            </div>

            {/* QR invite section */}
            <div style={{ ...glassCard, marginTop: 8, padding: "10px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <QrCode size={15} color="#4ade80" />
                <span style={{ color: "white", fontWeight: 700, fontSize: "0.88rem" }}>Pozvat hráče</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div>
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="QR kód pro pozvání"
                      style={{
                        width: 130, height: 130,
                        borderRadius: "10px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                        background: "white",
                        padding: "6px",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div style={{ width: 130, height: 130, background: "rgba(255,255,255,0.05)", borderRadius: "10px" }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.76rem", margin: "0 0 10px", lineHeight: 1.5 }}>
                    Naskenuj QR kód a otevře se aplikace — každý si pak může vytvořit vlastní tým nebo se připojit ke stávajícímu.
                  </p>
                  {navigator.share && (
                    <button
                      onClick={() => navigator.share({ title: "Rozcestník", url: window.location.origin + (import.meta.env.BASE_URL || "/") })}
                      style={{
                        width: "100%", padding: "8px",
                        borderRadius: "8px", display: "flex", alignItems: "center",
                        justifyContent: "center", gap: "6px",
                        background: "rgba(74,222,128,0.12)",
                        border: "1px solid rgba(74,222,128,0.3)",
                        color: "#4ade80", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer",
                      }}
                    >
                      <Share2 size={13} />
                      Sdílet odkaz
                    </button>
                  )}
                </div>
              </div>
            </div>

            <button onClick={leaveTeam} style={{ ...leaveBtn, marginTop: 8 }}>
              Opustit tým
            </button>
          </>
        ) : (
          <div style={{ marginTop: 10 }}>
            {/* Tabs */}
            <div style={{ display: "flex", borderRadius: "10px", overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.12)", marginBottom: 16 }}>
              {(["create", "join"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setError(""); }}
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: tab === t ? "rgba(34,197,94,0.25)" : "transparent",
                    border: "none",
                    color: tab === t ? "white" : "rgba(255,255,255,0.45)",
                    fontWeight: tab === t ? 700 : 400,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  {t === "create" ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                      <Plus size={14} /> Vytvořit tým
                    </span>
                  ) : (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                      <LogIn size={14} /> Připojit se
                    </span>
                  )}
                </button>
              ))}
            </div>

            {tab === "create" ? (
              <div style={glassCard}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", marginTop: 0, marginBottom: 12 }}>
                  Vytvoř tým a pošli kamarádovi kód nebo QR kód pro přizvání.
                </p>
                <input
                  type="text"
                  placeholder="Název týmu (např. Petra & Tomáš)"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && createTeam()}
                  maxLength={40}
                  style={inputStyle}
                />
                {error && <p style={errorStyle}>{error}</p>}
                <button onClick={createTeam} disabled={submitting} style={greenBtn}>
                  {submitting ? "Vytvářím…" : "Vytvořit tým"}
                </button>
              </div>
            ) : (
              <div style={glassCard}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", marginTop: 0, marginBottom: 12 }}>
                  Zadej 6-místný kód, který ti poslal vedoucí týmu.
                </p>
                <input
                  type="text"
                  placeholder="Kód týmu (např. AB12CD)"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === "Enter" && joinTeam()}
                  maxLength={6}
                  style={{ ...inputStyle, letterSpacing: "0.15em", textTransform: "uppercase" }}
                />
                {error && <p style={errorStyle}>{error}</p>}
                <button onClick={joinTeam} disabled={submitting} style={greenBtn}>
                  {submitting ? "Připojuji…" : "Připojit se"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1.5px solid rgba(255,255,255,0.12)",
  borderRadius: "14px",
  padding: "16px",
};

const centerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "60vh",
};

const iconBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  display: "flex",
  alignItems: "center",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: "10px",
  border: "1.5px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.2)",
  color: "white",
  fontSize: "0.9rem",
  outline: "none",
  boxSizing: "border-box",
  marginBottom: "10px",
};

const greenBtn: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: 700,
  fontSize: "0.9rem",
  cursor: "pointer",
};

const leaveBtn: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid rgba(239,68,68,0.35)",
  background: "rgba(239,68,68,0.1)",
  color: "rgba(239,68,68,0.7)",
  fontSize: "0.82rem",
  cursor: "pointer",
};

const errorStyle: React.CSSProperties = {
  color: "#f87171",
  fontSize: "0.8rem",
  margin: "0 0 8px",
};
