import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "rozcestnik_wishlist";

function load(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function save(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Set<string>>(load);

  useEffect(() => {
    save(wishlist);
  }, [wishlist]);

  const isWishlisted = useCallback((id: string) => wishlist.has(id), [wishlist]);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return { isWishlisted, toggleWishlist, count: wishlist.size };
}
