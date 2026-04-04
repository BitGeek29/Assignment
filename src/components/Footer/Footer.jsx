import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-pagex py-12 text-slate-300 dark:border-slate-800 md:px-pagexl">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-[1.5fr_1fr]">
        <section aria-labelledby="footer-brand">
          <h2 id="footer-brand" className="font-accent text-4xl leading-none text-brand-300">
            PROPERTY RENTAL
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Premium stays designed for comfort, privacy, and memorable getaways. Explore curated
            villas with modern amenities and concierge-level support.
          </p>
          <nav className="mt-6" aria-label="Footer links">
            <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold tracking-wide">
              <li>
                <Link className="transition hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" to="/termsandconditions">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" to="/notes">
                  Notes
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="font-display text-5xl leading-none text-slate-100">
            Connect with us
          </h2>
          <ul className="mt-4 space-y-3 text-base">
            <li>+91 000 000 0000</li>
            <li>ozgur@gmail.com</li>
            <li>All Rights Reserved by Ozgur</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
