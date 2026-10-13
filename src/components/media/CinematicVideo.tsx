import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import AssetImage from "./AssetImage";
import { getAsset } from "@/data/imageManifest";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CinematicVideoProps {
  id: string;
  className?: string;
  style?: CSSProperties;
  alt?: string;
  autoplay?: boolean;
  loop?: boolean;
}

/**
 * Cinematic video component for future Google Flow clips.
 *
 * - If the manifest entry has no videoPath, only the poster still is shown.
 * - If the video fails to load, it falls back to the poster still.
 * - Autoplay is always muted and inline (required for mobile browsers).
 * - Playback pauses when the element leaves the viewport.
 * - Reduced-motion users receive the poster still only, no video.
 */
export default function CinematicVideo({
  id,
  className,
  style,
  alt,
  autoplay = true,
  loop = true,
}: CinematicVideoProps) {
  const asset = getAsset(id);
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;
    if (prefersReducedMotion) return;
    if (!autoplay) return;
    if (!asset.videoPath) return;
    if (videoFailed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {
              /* Autoplay may be blocked by the browser. That is fine. */
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [autoplay, prefersReducedMotion, asset.videoPath, videoFailed]);

  const showVideo =
    !prefersReducedMotion && !videoFailed && Boolean(asset.videoPath);

  if (!showVideo) {
    return <AssetImage id={id} className={className} alt={alt} style={style} />;
  }

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: String(asset.aspectRatio),
        overflow: "hidden",
        borderRadius: "var(--radius-md)",
        background: "var(--color-bg-1)",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        poster={asset.posterPath ?? asset.imagePath}
        muted
        playsInline
        loop={loop}
        autoPlay={autoplay}
        preload="none"
        onError={() => setVideoFailed(true)}
        aria-label={alt ?? asset.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: asset.focalPoint ?? "50% 50%",
          display: "block",
        }}
      >
        <source src={asset.videoPath} type="video/mp4" />
      </video>
    </div>
  );
}