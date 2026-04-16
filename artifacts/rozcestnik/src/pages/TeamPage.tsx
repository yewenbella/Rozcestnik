import { useEffect, useState, useRef } from "react";
import { useUser, useClerk, useAuth } from "@clerk/react";
import { useLocation } from "wouter";
import { Users, Plus, LogIn, Copy, Check, LogOut, Mountain, QrCode, Share2, Pencil, BookOpen } from "lucide-react";
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
  const { getToken } = useAuth();
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
  const [nickname, setNickname] = useState<string | null>(null);
  const [nicknameInput, setNicknameInput] = useState("");
  const [editingNickname, setEditingNickname] = useState(false);
  const [savingNickname, setSavingNickname] = useState(false);
  const [nicknameSaved, setNicknameSaved] = useState(false);
  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!user) {
      navigate(`${BASE}/sign-in`);
      return;
    }
    fetchTeam();
    fetchNickname();
  }, [isLoaded, user]);

  useEffect(() => {
    const url = window.location.origin + (import.meta.env.BASE_URL || "/");
    QRCode.toDataURL(url, { width: 200, margin: 1, color: { dark: "#1a2a1a", light: "#ffffff" } })
      .then(setQrDataUrl)
      .catch(() => {});
  }, []);

  const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = await getToken();
    const headers: Record<string, string> = {
      ...(options.headers as Record<string, string> || {}),
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(url, { ...options, credentials: "include", headers });
    if (res.status === 401) {
      navigate(`${BASE}/sign-in`);
      throw new Error("session-expired");
    }
    return res;
  };

  const fetchTeam = async () => {
    try {
      const res = await authFetch("/api/teams/me");
      const data = await res.json();
      setTeam(data.team ? { ...data.team, memberCount: data.memberCount } : null);
    } catch (e: any) {
      if (e?.message !== "session-expired") setTeam(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchNickname = async () => {
    try {
      const res = await authFetch("/api/profile");
      const data = await res.json();
      if (data.nickname) {
        setNickname(data.nickname);
        setNicknameInput(data.nickname);
      }
    } catch { }
  };

  const saveNickname = async () => {
    if (!nicknameInput.trim()) return;
    setSavingNickname(true);
    try {
      const res = await authFetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname: nicknameInput.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setNickname(data.nickname);
        setEditingNickname(false);
        setNicknameSaved(true);
        setTimeout(() => setNicknameSaved(false), 2500);
      }
    } catch { } finally {
      setSavingNickname(false);
    }
  };

  const createTeam = async () => {
    if (!teamName.trim()) return setError("Zadej název týmu");
    setSubmitting(true);
    setError("");
    try {
      const res = await authFetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: teamName }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Chyba");
      setTeam({ ...data.team, memberCount: 1 });
    } catch (e: any) {
      if (e?.message !== "session-expired") setError("Chyba připojení");
    } finally {
      setSubmitting(false);
    }
  };

  const joinTeam = async () => {
    if (!inviteCode.trim()) return setError("Zadej kód týmu");
    setSubmitting(true);
    setError("");
    try {
      const res = await authFetch("/api/teams/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Chyba");
      setTeam({ ...data.team, memberCount: 2 });
    } catch (e: any) {
      if (e?.message !== "session-expired") setError("Chyba připojení");
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

  const dennikBtn = (
    <button
      onClick={() => navigate(`${BASE}/denik`)}
      title={"Cestovn\u00ed den\u00edk"}
      style={{
        width: 38, height: 38,
        borderRadius: "50%",
        background: "rgba(10,45,50,0.85)",
        border: "1.5px solid rgba(20,184,166,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(20,184,166,0.2)",
        flexShrink: 0,
      }}
    >
      <BookOpen size={17} color="#5eead4" />
    </button>
  );

  if (!isLoaded || loading) {
    return (
      <PageLayout title={"M\u016fj t\u00fdm"} backPath="/" rightSlot={dennikBtn}>
        <div style={centerStyle}>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>{"Na\u010d\u00edt\u00e1m\u2026"}</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={"M\u016fj t\u00fdm"} backPath="/" rightSlot={dennikBtn}>
      <div style={{ padding: "10px 14px", maxWidth: "480px", margin: "0 auto" }}>

        {/* User info */}
        <div style={{ ...glassCard, padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            {user?.imageUrl && (
              <img
                src={user.imageUrl}
                alt="avatar"
                style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.25)", flexShrink: 0, marginTop: 2 }}
              />
            )}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "8px" }}>

              {/* Uživatelské jméno */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.82rem", flexShrink: 0 }}>
                  {"U\u017eivatelsk\u00e9 jm\u00e9no:"}
                </span>
                <span style={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>
                  {user?.username || user?.fullName || user?.firstName || "Uživatel"}
                </span>
              </div>

              {/* Přezdívka */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.82rem", flexShrink: 0 }}>
                  {"P\u0159ezd\u00edvka:"}
                </span>
                {editingNickname ? (
                  <div style={{ display: "flex", gap: "6px", alignItems: "center", flex: 1, minWidth: 0 }}>
                    <input
                      ref={nicknameRef}
                      value={nicknameInput}
                      onChange={(e) => setNicknameInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") saveNickname(); if (e.key === "Escape") { setEditingNickname(false); setNicknameInput(nickname || ""); } }}
                      maxLength={30}
                      placeholder={"Nap\u0159. LesniBehoun"}
                      autoFocus
                      style={{
                        flex: 1, minWidth: 0,
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(74,222,128,0.5)",
                        borderRadius: "7px",
                        padding: "5px 9px",
                        color: "white",
                        fontSize: "0.90rem",
                        fontWeight: 700,
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={saveNickname}
                      disabled={savingNickname || !nicknameInput.trim()}
                      style={{
                        background: "rgba(74,222,128,0.25)",
                        border: "1px solid rgba(74,222,128,0.5)",
                        borderRadius: "7px",
                        padding: "5px 10px",
                        color: "#4ade80",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {savingNickname ? "\u2026" : "Ulo\u017eit"}
                    </button>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {nickname ? (
                      <span style={{ color: "#4ade80", fontWeight: 800, fontSize: "0.95rem" }}>
                        {nickname}
                        {nicknameSaved && <span style={{ color: "rgba(74,222,128,0.6)", fontWeight: 400, fontSize: "0.72rem", marginLeft: 6 }}>{"\u2714 Ulo\u017eeno"}</span>}
                      </span>
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", fontStyle: "italic" }}>
                        {"Nastav p\u0159ezd\u00edvku\u2026"}
                      </span>
                    )}
                    <button
                      onClick={() => { setEditingNickname(true); setTimeout(() => nicknameRef.current?.focus(), 50); }}
                      style={{ ...iconBtn, padding: "2px" }}
                      title={"Upravit p\u0159ezd\u00edvku"}
                    >
                      <Pencil size={12} color="rgba(255,255,255,0.4)" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => signOut({ redirectUrl: "/" })}
              style={{ ...iconBtn, flexShrink: 0, marginTop: 2 }}
              title={"Odhl\u00e1sit se"}
            >
              <LogOut size={16} color="rgba(255,255,255,0.5)" />
            </button>
          </div>
        </div>

        {team ? (
          <>
            {/* Team info */}
            <div style={{ ...glassCard, marginTop: 8, padding: "10px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Mountain size={17} color="#4ade80" />
                <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.82rem" }}>{"T\u00fdm:"}</span>
                <span style={{ color: "white", fontWeight: 800, fontSize: "1rem" }}>{team.name}</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
                  <Users size={12} color="rgba(255,255,255,0.4)" />
                  {team.memberCount} {team.memberCount === 1 ? "člen" : team.memberCount < 5 ? "členové" : "členů"}
                </span>
              </div>

              <div style={{ background: "rgba(0,0,0,0.45)", borderRadius: "10px", padding: "10px 12px", marginBottom: "10px" }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.70rem", margin: "0 0 3px" }}>
                  {"K\u00f3d pro p\u0159izv\u00e1n\u00ed"}
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

              <button onClick={leaveTeam} style={leaveBtn}>
                {"Opustit t\u00fdm"}
              </button>
            </div>

            {/* QR invite section — bottom */}
            <div style={{ ...glassCard, marginTop: 8, padding: "10px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <QrCode size={15} color="#4ade80" />
                <span style={{ color: "white", fontWeight: 700, fontSize: "0.88rem" }}>{"Pozvat hr\u00e1\u010de"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div>
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt={"QR k\u00f3d pro pozv\u00e1n\u00ed"}
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
                    {"Naskenuj QR k\u00f3d a otev\u0159e se aplikace \u2014 ka\u017ed\u00fd si pak m\u016f\u017ee vytvo\u0159it vlastn\u00ed t\u00fdm nebo se p\u0159ipojit ke st\u00e1vaj\u00edc\u00edmu."}
                  </p>
                  {navigator.share && (
                    <button
                      onClick={() => navigator.share({ title: "Rozcestn\u00edk", url: window.location.origin + (import.meta.env.BASE_URL || "/") })}
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
                      {"Sd\u00edlet odkaz"}
                    </button>
                  )}
                </div>
              </div>
            </div>
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
  background: "rgba(5,18,5,0.82)",
  border: "1.5px solid rgba(255,255,255,0.18)",
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
