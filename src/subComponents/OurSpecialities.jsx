import React from "react";
import { Link } from "react-router-dom";
import { Anchor, ArrowRight, Car, Dumbbell, Waves, PawPrint } from "lucide-react";

const specialities = [
  { id: 1, key: "seafront", title: "Seafront", icon: Waves, subText: "Ocean-facing stays" },
  { id: 2, key: "pet-friendly", title: "Pet Friendly", icon: PawPrint, subText: "Pets are welcome" },
  { id: 3, key: "electric-car", title: "Electric Car", icon: Car, subText: "EV charging onsite" },
  { id: 4, key: "fitness-gym", title: "Fitness/Gym", icon: Dumbbell, subText: "Private gym access" },
  { id: 5, key: "boat-morning", title: "Boat Morning", icon: Anchor, subText: "Curated sea tours" },
];

const OurSpecialities = () => {
  return (
    <section aria-labelledby="specialities-heading" className="rounded-card border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-surface-900 md:p-8">
      <h2 id="specialities-heading" className="font-display text-[2.2rem] leading-none md:text-[3rem]">
        Property Specialities
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {specialities.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              to={`/villas?feature=${item.key}`}
              className="group block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-700 dark:bg-surface-900"
              key={item.id}
              aria-label={`Open villas filtered by ${item.title}`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-600 transition group-hover:gap-1.5 dark:text-slate-300">
                {item.subText}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OurSpecialities;

