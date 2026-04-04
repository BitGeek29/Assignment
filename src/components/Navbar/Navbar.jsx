import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { to: "/aboutus", label: "About Us" },
  { to: "/villas", label: "Villas" },
  { to: "/contact", label: "Contact" },
  { to: "/notes", label: "Notes" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(enabled);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [isOpen]);

  const navLinkClass = useMemo(
    () =>
      ({ isActive }) =>
        [
          "rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition",
          "focus-visible:ring-2 focus-visible:ring-brand-400",
          isActive
            ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
            : "text-slate-700 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
        ].join(" "),
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-[120] border-b border-slate-200/70 bg-white/90 backdrop-blur-md dark:border-[#1a1a1a] dark:bg-[#0b0b0b]">
      <nav
        className="mx-auto flex h-nav w-full max-w-[1200px] items-center justify-between px-pagex md:px-pagexl"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="font-accent text-[1.15rem] font-semibold tracking-[0.1em] text-slate-900 transition hover:opacity-85 dark:text-[#f3efe7] md:text-[1.9rem] md:tracking-[0.18em]"
        >
          PROPERTY RENTALS
        </Link>

        <ul className="m-0 hidden list-none items-center gap-2 p-0 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink className={navLinkClass} to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-[#2a2a2a] dark:bg-[#111111] dark:text-slate-100 dark:hover:bg-[#171717]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-[#2a2a2a] dark:bg-[#111111] dark:text-slate-100 dark:hover:bg-[#171717]"
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-nav z-[110] bg-slate-950/40 transition md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        className={`fixed inset-x-4 top-[6.3rem] z-[115] rounded-card border border-slate-200 bg-white p-3 shadow-card transition md:hidden dark:border-[#2a2a2a] dark:bg-[#0b0b0b] ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="m-0 list-none space-y-1 p-0">
          {navItems.map((item) => (
            <li key={`mobile-${item.to}`}>
              <NavLink
                className={navLinkClass}
                to={item.to}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

