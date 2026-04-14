import { useState, useEffect, useCallback } from "react";
import { useUser, useClerk } from "@clerk/react";

export type DennikItem = {
  id: number;
  type: "trasa" | "rozhledna" | "hrad";
  itemId: string;
  itemName: string;
  completedAt: string;
};

export function useDenik() {
  const { isLoaded, isSignedIn } = useUser();
  const { session } = useClerk();
  const [items, setItems] = useState<DennikItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getToken = useCallback(async () => {
    try { return session ? await session.getToken() : null; } catch { return null; }
  }, [session]);

  const fetchItems = useCallback(async () => {
    if (!isSignedIn) return;
    setLoading(true);
    try {
      const token = await getToken();
      const headers: Record<string, string> = {};
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const res = await fetch("/api/denik", { headers, credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setItems(data.items || []);
      }
    } catch {}
    setLoading(false);
  }, [isSignedIn, getToken]);

  useEffect(() => {
    if (isLoaded) fetchItems();
  }, [isLoaded, fetchItems]);

  const isCompleted = useCallback((type: string, itemId: string) => {
    return items.some(i => i.type === type && i.itemId === itemId);
  }, [items]);

  const toggle = useCallback(async (
    type: "trasa" | "rozhledna" | "hrad",
    itemId: string,
    itemName: string
  ) => {
    if (!isSignedIn) return;
    const alreadyDone = items.some(i => i.type === type && i.itemId === itemId);
    const token = await getToken();
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    if (alreadyDone) {
      await fetch(`/api/denik/${type}/${encodeURIComponent(itemId)}`, {
        method: "DELETE",
        headers,
        credentials: "include",
      });
      setItems(prev => prev.filter(i => !(i.type === type && i.itemId === itemId)));
    } else {
      const res = await fetch("/api/denik", {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify({ type, itemId, itemName }),
      });
      if (res.ok) {
        const data = await res.json();
        setItems(prev => [...prev, data.item]);
      }
    }
  }, [isSignedIn, items, getToken]);

  return { items, loading, isCompleted, toggle, isSignedIn: !!isSignedIn };
}
