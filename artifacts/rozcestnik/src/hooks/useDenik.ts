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
      // Optimistic remove
      setItems(prev => prev.filter(i => !(i.type === type && i.itemId === itemId)));
      try {
        await fetch(`/api/denik/${type}/${encodeURIComponent(itemId)}`, {
          method: "DELETE", headers, credentials: "include",
        });
      } catch {
        // Revert on error
        fetchItems();
      }
    } else {
      // Optimistic add with temporary item
      const tempItem: DennikItem = {
        id: -Date.now(),
        type, itemId, itemName,
        completedAt: new Date().toISOString(),
      };
      setItems(prev => [...prev, tempItem]);
      try {
        const res = await fetch("/api/denik", {
          method: "POST", headers, credentials: "include",
          body: JSON.stringify({ type, itemId, itemName }),
        });
        if (res.ok) {
          const data = await res.json();
          // Replace temp item with real item from server
          setItems(prev => prev.map(i => i.id === tempItem.id ? data.item : i));
        } else {
          // Revert on error
          setItems(prev => prev.filter(i => i.id !== tempItem.id));
        }
      } catch {
        // Revert on network error
        setItems(prev => prev.filter(i => i.id !== tempItem.id));
      }
    }
  }, [isSignedIn, items, getToken, fetchItems]);

  const markDone = useCallback(async (
    type: "trasa" | "rozhledna" | "hrad",
    itemId: string,
    itemName: string
  ) => {
    if (!isSignedIn) return;
    const alreadyDone = items.some(i => i.type === type && i.itemId === itemId);
    if (alreadyDone) return;
    const token = await getToken();
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const tempItem: DennikItem = {
      id: -Date.now(),
      type, itemId, itemName,
      completedAt: new Date().toISOString(),
    };
    setItems(prev => [...prev, tempItem]);
    try {
      const res = await fetch("/api/denik", {
        method: "POST", headers, credentials: "include",
        body: JSON.stringify({ type, itemId, itemName }),
      });
      if (res.ok) {
        const data = await res.json();
        setItems(prev => prev.map(i => i.id === tempItem.id ? data.item : i));
      } else {
        setItems(prev => prev.filter(i => i.id !== tempItem.id));
      }
    } catch {
      setItems(prev => prev.filter(i => i.id !== tempItem.id));
    }
  }, [isSignedIn, items, getToken]);

  return { items, loading, isCompleted, toggle, markDone, isSignedIn: !!isSignedIn };
}
