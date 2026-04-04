import { useCallback, useEffect, useState } from "react";
import { villas as seedVillas } from "../villas";

const getDelay = () => {
  const raw = Number(import.meta.env.VITE_VILLAS_DELAY_MS);
  if (!Number.isFinite(raw) || raw < 0) {
    return 480;
  }
  return raw;
};

const shouldForceError = () => import.meta.env.VITE_FORCE_VILLAS_ERROR === "true";

const shouldForceEmpty = () => import.meta.env.VITE_FORCE_VILLAS_EMPTY === "true";

export const useVillasData = () => {
  const [villas, setVillas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, getDelay());
      });

      if (shouldForceError()) {
        throw new Error("Unable to fetch villa listings right now.");
      }

      const data = shouldForceEmpty() ? [] : seedVillas;
      setVillas(data);
    } catch (loadError) {
      setVillas([]);
      setError(loadError.message || "Unable to load villa listings.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    villas,
    isLoading,
    error,
    retry: load,
  };
};
