import { useEffect, useState } from "react";
import type { PortfolioAsset } from "@/types/portfolio";

/**
 * Preload a set of images into the browser cache.
 *
 * Only assets with priority "critical" or "high" are preloaded by default,
 * because preloading every image would defeat lazy-loading.
 *
 * Returns counts of how many images succeeded and failed. A failed
 * preload does not break the page -- the corresponding AssetImage will
 * fall back to its placeholder.
 */
export function useImagePreload(
  assets: PortfolioAsset[],
  options: { onlyHighPriority?: boolean } = {},
): { loaded: number; failed: number } {
  const onlyHighPriority = options.onlyHighPriority ?? true;

  const [state, setState] = useState<{ loaded: number; failed: number }>({
    loaded: 0,
    failed: 0,
  });

  useEffect(() => {
    const targets = onlyHighPriority
      ? assets.filter(
          (a) =>
            (a.priority === "critical" || a.priority === "high") &&
            a.status === "present",
        )
      : assets.filter((a) => a.status === "present");

    if (targets.length === 0) {
      // Nothing to preload -- leave the initial state untouched.
      return;
    }

    let cancelled = false;
    let loaded = 0;
    let failed = 0;

    const onSettle = () => {
      if (cancelled) return;
      setState({ loaded, failed });
    };

    targets.forEach((asset) => {
      const img = new Image();
      img.onload = () => {
        loaded += 1;
        onSettle();
      };
      img.onerror = () => {
        failed += 1;
        onSettle();
      };
      img.src = asset.imagePath;
    });

    return () => {
      cancelled = true;
    };
  }, [assets, onlyHighPriority]);

  return state;
}