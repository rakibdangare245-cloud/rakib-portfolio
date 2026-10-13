import type { ReactNode } from "react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";

/**
 * Global layout: skip link, navigation, main content, footer.
 */
export default function AppShell({ children }: { children: ReactNode }) {
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