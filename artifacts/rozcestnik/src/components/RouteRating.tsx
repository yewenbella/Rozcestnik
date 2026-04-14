import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Props {
  routeId: number;
}

export default function RouteRating({ routeId }: Props) {
  const [myRating, setMyRating] = useState<number | null>(null);
  const [avgRating, setAvgRating] = useState<number | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/ratings/${routeId}`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        setAvgRating(d.avg ?? null);
        setTotalCount(d.count ?? 0);
        setMyRating(d.myRating ?? null);
      })
      .catch(() => {});
  }, [routeId]);

  const submit = async (stars: number) => {
    setSaving(true);
    try {
      const r = await fetch("/api/ratings", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ routeId, rating: stars }),
      });
      if (r.ok) {
        setMyRating(stars);
        const updated = await fetch(`/api/ratings/${routeId}`, { credentials: "include" });
        const d = await updated.json();
        setAvgRating(d.avg ?? null);
        setTotalCount(d.count ?? 0);
        setOpen(false);
      }
    } catch {}
    setSaving(false);
  };

  const displayStars = hover ?? myRating ?? 0;
  const avgDisplay = avgRating ? avgRating.toFixed(1) : null;

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        title="Ohodnotit trasu"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "6px 10px",
          borderRadius: "10px",
          background: myRating
            ? "rgba(251,191,36,0.15)"
            : "rgba(255,255,255,0.07)",
          border: myRating
            ? "1px solid rgba(251,191,36,0.4)"
            : "1px solid rgba(255,255,255,0.12)",
          color: myRating ? "#fbbf24" : "rgba(255,255,255,0.55)",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        <Star
          size={15}
          fill={myRating ? "#fbbf24" : "none"}
          color={myRating ? "#fbbf24" : "rgba(255,255,255,0.55)"}
          strokeWidth={2}
        />
        <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>
          {avgDisplay ? avgDisplay : "Hodnotit"}
        </span>
        {totalCount > 0 && (
          <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
            ({totalCount})
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            style={{ position: "fixed", inset: 0, zIndex: 49 }}
            onClick={() => setOpen(false)}
          />
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              zIndex: 50,
              background: "rgba(20,35,20,0.97)",
              border: "1px solid rgba(251,191,36,0.25)",
              borderRadius: "14px",
              padding: "14px 16px",
              backdropFilter: "blur(16px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              minWidth: "200px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", marginBottom: "10px", fontWeight: 600 }}>
              Jak se ti trasa líbila?
            </div>
            <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  disabled={saving}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => submit(star)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: saving ? "wait" : "pointer",
                    padding: "2px",
                    transition: "transform 0.1s",
                    transform: hover === star ? "scale(1.25)" : "scale(1)",
                  }}
                >
                  <Star
                    size={28}
                    fill={star <= displayStars ? "#fbbf24" : "none"}
                    color={star <= displayStars ? "#fbbf24" : "rgba(255,255,255,0.25)"}
                    strokeWidth={1.8}
                  />
                </button>
              ))}
            </div>
            {myRating && (
              <div style={{ textAlign: "center", marginTop: "8px", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>
                Tvoje hodnocení: {myRating}/5
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
