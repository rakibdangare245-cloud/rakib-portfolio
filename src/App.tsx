import { BrowserRouter } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import AppRoutes from "@/app/router";

/**
 * Root application component.
 *
 * Wires the router and global layout shell together. Individual pages
 * live under `src/app/` and stack the section components.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <AppRoutes />
      </AppShell>
    </BrowserRouter>
  );
}