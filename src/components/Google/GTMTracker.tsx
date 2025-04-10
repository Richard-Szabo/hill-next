"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type DataLayerEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

export default function GTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: pathname,
      });
    }
  }, [pathname]);

  return null;
}
