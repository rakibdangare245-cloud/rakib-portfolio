import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

/**
 * Primary site navigation.
 *
 * Phase 5: routes and mobile drawer animation.
 * Phase 7+: scroll-progress indicator and section-aware highlighting.
 *
 * Note: the mobile drawer is closed via the link's onClick handler,
 * not via a useEffect — following React 19 guidance for state that
 * should change in response to a user event.
 */

type NavItem = { label: string; to: string };

const ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/#skills" },
  { label: "Network", to: "/#network" },
  { label: "Security", to: "/#cybersecurity" },
  { label: "Cloud", to: "/#cloud" },
  { label: "Projects", to: "/#projects" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-nav)",
        background: "var(--color-bg-overlay)",
        backdropFilter: "blur(var(--blur-md))",
        borderBottom: "1px solid var(--color-border-subtle)",
      }}
    >
      <nav
        className="container"
        aria-label="Primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <Link
          to="/"
          onClick={close}
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-wider)",
            color: "var(--color-text-primary)",
          }}
        >
          RAVEX
        </Link>

        {/* Desktop nav */}
        <ul className="nav-desktop" style={{ gap: "var(--space-5)" }}>
          {ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-accent)"
                    : "var(--color-text-secondary)",
                  fontSize: "var(--fs-sm)",
                })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="nav-toggle"
          style={{ color: "var(--color-text-primary)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid var(--color-border-subtle)",
              background: "var(--color-bg-1)",
            }}
          >
            <ul className="container" style={{ paddingBlock: "var(--space-4)" }}>
              {ITEMS.map((item) => (
                <li key={item.to} style={{ paddingBlock: "var(--space-2)" }}>
                  <NavLink
                    to={item.to}
                    onClick={close}
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}