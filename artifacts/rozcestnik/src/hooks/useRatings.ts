import { useState, useCallback } from "react";

const STORAGE_KEY = "rozcestnik_ratings";

function load(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function save(data: Record<string, number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useRatings() {
  const [ratings, setRatings] = useState<Record<string, number>>(load);

  const getRating = useCallback((id: string) => ratings[id] ?? 0, [ratings]);

  const setRating = useCallback((id: string, stars: number) => {
    setRatings(prev => {
      const next = { ...prev, [id]: stars };
      save(next);
      return next;
    });
  }, []);

  const clearRating = useCallback((id: string) => {
    setRatings(prev => {
      const next = { ...prev };
      delete next[id];
      save(next);
      return next;
    });
  }, []);

  return { getRating, setRating, clearRating };
}
