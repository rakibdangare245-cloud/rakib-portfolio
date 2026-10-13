import { useEffect, useRef } from "react";

/**
 * Keeps a ref synchronized with the latest value after each render,
 * without writing to the ref during render.
 *
 * This is the React 19-safe replacement for the old pattern:
 *   const ref = useRef(value);
 *   ref.current = value;   // forbidden by react-hooks/refs
 *
 * Reads inside effects will always see the value from the most recent
 * committed render.
 */
export function useLatestRef<T>(value: T): React.RefObject<T> {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref;
}