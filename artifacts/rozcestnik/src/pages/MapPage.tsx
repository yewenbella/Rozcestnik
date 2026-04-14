import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";
import { Search, X, ArrowLeft } from "lucide-react";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
  type: string;
}

export default function MapPage() {
  const [, navigate] = useLocation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mapSrc, setMapSrc] = useState(
    "https://frame.mapy.cz/?x=15.5&y=49.8&z=8&base=turist&lang=cs"
  );
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&countrycodes=cz,sk&accept-language=cs`
      );
      const data: Suggestion[] = await res.json();
      setSuggestions(data);
      setShowSuggestions(data.length > 0);
    } catch {
      setSuggestions([]);
    }
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchText(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 350);
  };

  const handleSelect = (s: Suggestion) => {
    const name = s.display_name.split(",")[0];
    setSearchText(name);
    setShowSuggestions(false);
    setSuggestions([]);
    setMapSrc(
      `https://frame.mapy.cz/?x=${s.lon}&y=${s.lat}&z=13&base=turist&lang=cs`
    );
  };

  const clearSearch = () => {
    setSearchText("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      maxWidth: "480px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#111a11",
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 12px 8px",
        backgroundColor: "#111a11",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        flexShrink: 0,
        zIndex: 10,
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "38px", height: "38px", borderRadius: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white", cursor: "pointer", flexShrink: 0,
          }}
        >
          <ArrowLeft size={18} strokeWidth={2.2} />
        </button>

        {/* Search bar inline */}
        <div style={{ flex: 1, position: "relative" }}>
          <Search
            size={15}
            color="rgba(255,255,255,0.4)"
            style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          />
          <input
            type="text"
            placeholder={"Hledat m\u011bsto nebo m\u00edsto\u2026"}
            value={searchText}
            onChange={handleInput}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            style={{
              width: "100%",
              padding: "9px 32px 9px 32px",
              borderRadius: "10px",
              border: "1.5px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.07)",
              color: "white",
              fontSize: "0.88rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          {searchText.length > 0 && (
            <button
              onClick={clearSearch}
              style={{ position: "absolute", right: "9px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
            >
              <X size={14} color="rgba(255,255,255,0.4)" />
            </button>
          )}

          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              backgroundColor: "#1a2e1a",
              border: "1.5px solid rgba(255,255,255,0.12)",
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 200,
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            }}>
              {suggestions.map((s, i) => {
                const parts = s.display_name.split(",");
                const city = parts[0];
                const region = parts.slice(1, 3).join(",").trim();
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(s)}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "flex-start",
                      width: "100%", padding: "10px 14px",
                      background: "none", border: "none",
                      borderBottom: i < suggestions.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{ color: "white", fontSize: "0.88rem", fontWeight: 600 }}>{city}</span>
                    {region && <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", marginTop: "2px" }}>{region}</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Mapy.cz iframe — fills all remaining space */}
      <iframe
        ref={iframeRef}
        key={mapSrc}
        src={mapSrc}
        style={{ flex: 1, width: "100%", border: "none", display: "block", minHeight: 0 }}
        title={"Turistick\u00e1 mapa ze Seznam.cz"}
        allowFullScreen
      />
    </div>
  );
}
