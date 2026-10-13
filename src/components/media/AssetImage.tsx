import { useState } from "react";
import type { CSSProperties } from "react";
import type { PortfolioAsset } from "@/types/portfolio";
import { getAsset } from "@/data/imageManifest";

interface AssetImageProps {
  /** Asset ID from the manifest. Example: "01-hero-portrait". */
  id: string;
  /** Optional extra classes for the wrapper. */
  className?: string;
  /** Optional inline style for the wrapper. */
  style?: CSSProperties;
  /** Override the manifest alt text. Rarely needed. */
  alt?: string;
  /** Force eager loading even if priority is not critical. */
  eager?: boolean;
}

/**
 * Displays an asset from the manifest with graceful fallbacks.
 *
 * - If the asset status is "pending", a designed placeholder is shown.
 * - If the file path is wrong at runtime (404), the component falls
 *   back to the placeholder rather than showing a broken image icon.
 * - The alt text always comes from the manifest unless overridden.
 */
export default function AssetImage({
  id,
  className,
  style,
  alt,
  eager = false,
}: AssetImageProps) {
  const asset: PortfolioAsset = getAsset(id);
  const [failed, setFailed] = useState(false);

  const wrapperStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    aspectRatio: String(asset.aspectRatio),
    overflow: "hidden",
    background: "var(--color-bg-1)",
    borderRadius: "var(--radius-md)",
    ...style,
  };

  const showPlaceholder = asset.status !== "present" || failed;

  if (showPlaceholder) {
    return (
      <div
        className={className}
        style={wrapperStyle}
        role="img"
        aria-label={alt ?? asset.alt}
      >
        <PlaceholderCard
          assetId={asset.id}
          section={asset.section}
          failed={failed}
        />
      </div>
    );
  }

  const loading = eager || asset.priority === "critical" ? "eager" : "lazy";
  const fetchPriority =
    asset.priority === "critical" ? "high" : asset.priority === "high" ? "high" : "auto";

  return (
    <div className={className} style={wrapperStyle}>
      <img
        src={asset.imagePath}
        alt={alt ?? asset.alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        onError={() => setFailed(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: asset.focalPoint ?? "50% 50%",
          display: "block",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PlaceholderCard                                                    */
/* ------------------------------------------------------------------ */

interface PlaceholderCardProps {
  assetId: string;
  section: string;
  failed: boolean;
}

function PlaceholderCard({ assetId, section, failed }: PlaceholderCardProps) {
  const label = failed ? "Missing asset file" : "Asset pending";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        padding: "var(--space-5)",
        textAlign: "center",
        border: "1px dashed var(--color-border)",
        borderRadius: "var(--radius-md)",
        background:
          "repeating-linear-gradient(135deg, var(--color-bg-1) 0 12px, var(--color-bg-2) 12px 24px)",
        color: "var(--color-text-tertiary)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fs-xs)",
          letterSpacing: "var(--tracking-wider)",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fs-xs)",
          color: "var(--color-text-secondary)",
        }}
      >
        {assetId}
      </span>
      <span
        style={{
          fontSize: "var(--fs-xs)",
          color: "var(--color-text-tertiary)",
        }}
      >
        Section: {section}
      </span>
    </div>
  );
}