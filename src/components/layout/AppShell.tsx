import type { ReactNode } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import { useLenisSmoothScroll } from "@/hooks/useLenisSmoothScroll";

/**
 * Global layout: skip link, navigation, main content, footer.
 *
 * Also owns the single Lenis smooth-scroll instance for the app.
 * Do NOT mount Lenis anywhere else.
 */
export default function AppShell({ children }: { children: ReactNode }) {
  useLenisSmoothScroll();

  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}