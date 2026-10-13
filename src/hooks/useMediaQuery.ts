import { useEffect, useState } from "react";

/**
 * Returns whether a CSS media query currently matches.
 *
 * SSR-safe: returns false on the server, then syncs on the client.
 * Subscribes to changes so the value stays current at runtime.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}