import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const inputClass =
  "h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-slate-700 dark:bg-surface-900 dark:text-slate-100 dark:placeholder:text-slate-500";

const SubContact = () => {
  return (
    <section aria-labelledby="contact-mini-heading" className="grid grid-cols-1 gap-4 rounded-card border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-surface-900 md:grid-cols-[1fr_1.45fr] md:p-8">
      <div className="rounded-xl bg-slate-900 p-5 text-slate-100">
        <h2 id="contact-mini-heading" className="font-display text-[2.1rem] leading-none">
          Let&apos;s connect
        </h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            +91 000 000 0000
          </li>
          <li className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            rs@gmail.com
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            House No.123 Sector A-1
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-display text-[2rem] leading-none md:text-[2.4rem]">We&apos;d love to hear from you</h3>
        <form className="mt-4 space-y-3" onSubmit={(event) => event.preventDefault()} aria-label="Quick contact form">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input className={inputClass} type="text" placeholder="Your Name" />
            <input className={inputClass} type="email" placeholder="Email" />
          </div>
          <textarea className={`${inputClass} h-28 py-2.5`} rows={4} placeholder="Your Message..." />
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubContact;

