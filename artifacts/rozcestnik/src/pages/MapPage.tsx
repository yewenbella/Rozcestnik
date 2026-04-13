import { useEffect, useRef, useState, useCallback } from "react";
import PageLayout from "@/components/PageLayout";
import { Search, X } from "lucide-react";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
  type: string;
}

export default function MapPage() {
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
    <PageLayout title="Mapa" backPath="/">
      <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 70px)" }}>

        {/* Search bar */}
        <div style={{ padding: "8px 12px", backgroundColor: "#1a2a1a", position: "relative", zIndex: 100, flexShrink: 0 }}>
          <div style={{ position: "relative" }}>
            <Search
              size={16}
              color="rgba(255,255,255,0.4)"
              style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            />
            <input
              type="text"
              placeholder="Hledat město nebo místo..."
              value={searchText}
              onChange={handleInput}
              onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
              style={{
                width: "100%",
                padding: "9px 36px 9px 34px",
                borderRadius: "10px",
                border: "1.5px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "0.88rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {searchText.length > 0 && (
              <button
                onClick={clearSearch}
                style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
              >
                <X size={15} color="rgba(255,255,255,0.4)" />
              </button>
            )}
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% - 4px)",
                left: "12px",
                right: "12px",
                backgroundColor: "#1e3020",
                border: "1.5px solid rgba(255,255,255,0.12)",
                borderRadius: "10px",
                overflow: "hidden",
                zIndex: 200,
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              {suggestions.map((s, i) => {
                const parts = s.display_name.split(",");
                const city = parts[0];
                const region = parts.slice(1, 3).join(",").trim();
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(s)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      width: "100%",
                      padding: "10px 14px",
                      background: "none",
                      border: "none",
                      borderBottom: i < suggestions.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      cursor: "pointer",
                      textAlign: "left",
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

        {/* Mapy.cz tourist map iframe */}
        <iframe
          ref={iframeRef}
          key={mapSrc}
          src={mapSrc}
          style={{ flex: 1, width: "100%", border: "none", display: "block" }}
          title="Turistická mapa ze Seznam.cz"
          allowFullScreen
        />
      </div>
    </PageLayout>
  );
}
