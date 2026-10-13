import { Route, Routes } from "react-router-dom";
import HomePage from "@/app/HomePage";

/**
 * Application routes.
 *
 * Phase 5: one route, the home page, which stacks all ten sections.
 * Phase 15+: additional routes for project case studies.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}