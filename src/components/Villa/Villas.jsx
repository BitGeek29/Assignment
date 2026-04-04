import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import VillaCard from "./VillaCard";
import { useVillasData } from "../../hooks/useVillasData";
import { EmptyState, ErrorState, LoadingCards } from "../Feedback/AsyncStates";

const featureFilters = {
  seafront: {
    label: "Seafront",
    fn: (villa) => String(villa.category || "").toLowerCase().includes("sea"),
  },
  "pet-friendly": {
    label: "Pet Friendly",
    fn: (villa) => Number(villa.guests) <= 12,
  },
  "electric-car": {
    label: "Electric Car",
    fn: (villa) => Number(villa.dailyRent) >= 250,
  },
  "fitness-gym": {
    label: "Fitness/Gym",
    fn: (villa) => Number(villa.bedrooms) >= 6,
  },
  "boat-morning": {
    label: "Boat Morning",
    fn: (villa) => String(villa.location || "").toLowerCase() === "greece",
  },
};

const Villas = () => {
  const [searchParams] = useSearchParams();
  const { villas, isLoading, error, retry } = useVillasData();
  const featureKey = searchParams.get("feature") || "";
  const activeFeature = featureFilters[featureKey];
  const filteredVillas = activeFeature ? villas.filter(activeFeature.fn) : villas;

  return (
    <section className="space-y-6" aria-labelledby="all-villas-heading">
      <header className="rounded-card border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-surface-900 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Villa directory</p>
        <h1 id="all-villas-heading" className="mt-2 font-display text-[2.8rem] leading-none md:text-[3.7rem]">
          All Villas
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {isLoading ? "Loading properties..." : `${filteredVillas.length} Properties available`}
        </p>
        {activeFeature ? (
          <div className="mt-3 inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-3 py-2 text-sm dark:border-[#2a2a2a] dark:bg-[#111111]">
            <span>Active filter: {activeFeature.label}</span>
            <Link
              to="/villas"
              className="border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-slate-100 dark:hover:bg-[#222222]"
            >
              Clear
            </Link>
          </div>
        ) : null}
      </header>

      {isLoading ? <LoadingCards count={6} /> : null}

      {!isLoading && error ? (
        <ErrorState
          title="Failed to load villas"
          description={error}
          retryLabel="Retry request"
          onRetry={retry}
        />
      ) : null}

      {!isLoading && !error && filteredVillas.length === 0 ? (
        <EmptyState
          title={activeFeature ? `No villas for ${activeFeature.label}` : "No villas available"}
          description={
            activeFeature
              ? "Try a different speciality filter or clear the current one."
              : "No listings found. Please check back shortly."
          }
        />
      ) : null}

      {!isLoading && !error && filteredVillas.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredVillas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Villas;

