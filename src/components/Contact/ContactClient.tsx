"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactClient() {
  const [shouldAnimate, setShouldAnimate] = useState<boolean | null>(null);

  useEffect(() => {
    // Tailwind's md breakpoint is 768px
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    // Set initial value
    setShouldAnimate(mediaQuery.matches);

    // Optional: Update on resize
    const handler = (e: MediaQueryListEvent) => setShouldAnimate(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  // Wait for client-side hydration to finish
  if (shouldAnimate === null) return null;

  return (
    <motion.div
      initial={shouldAnimate ? { translateY: 400 } : false}
      whileInView={
        shouldAnimate
          ? {
              translateY: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }
          : {}
      }
      viewport={{ once: true }}
      className="flex flex-col items-center justify-start w-full h-full bg-hill-primary md:bg-hill-primary/95 pt-3 md:pt-10 pb-3 md:pb-0 px-3 md:px-10 gap-3"
    >
      <h1 className="font-hill2 text-2xl md:text-4xl text-white pb-3 md:pb-6">
        Kapcsolatfelvétel
      </h1>

      <p className="font-hill text-md md:text-lg text-center text-white font-light pb-3 md:pb-0">
        Örömmel várjuk megkeresését, és szívesen mesélünk Önnek korszerű
        rendelőnkről és az általunk nyújtott számos szolgáltatásról.
      </p>
      <p className="hidden md:block font-hill text-md text-white font-light">
        Legyen szó kérdésekről a rendelőnkkel kapcsolatban, konzultáció iránti
        érdeklődésről, vagy időpontfoglalásról, barátságos és hozzáértő
        csapatunk szívesen fogadja hívását. Ezenkívül kényelmesen, online is
        felveheti velünk a kapcsolatot az egyszerű „Kapcsolatfelvételi”
        űrlapunkon keresztül.
      </p>

      <ContactForm />
    </motion.div>
  );
}
