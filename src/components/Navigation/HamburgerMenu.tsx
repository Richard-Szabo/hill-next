"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ServicesMenu from "./ServicesMenu"; // Import Server Component
import useScroll from "@/hooks/useScroll";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const isScrolled = useScroll();

  
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen ? (
        <IoClose
          size={44}
          onClick={() => setIsOpen(false)}
          className="text-red-400 hover:text-red/600 cursor-pointer transition-all duration-300 hover:scale-110 w-16"
        />
      ) : (
        <GiHamburgerMenu
          size={32}
          className="text-hill-primary hover:text-hill-secondary cursor-pointer transition-all duration-300 hover:scale-110 w-16"
          onClick={() => setIsOpen(true)}
        />
      )}
{/* 157 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 w-full top-[106px] ${
              !isScrolled
                ? "md:top-[157px] md:h-[calc(100vh-157px)]"
                : "md:top-[64px] md:h-[calc(100vh-64px)]"
            } left-0    z-50 bg-white/90 overflow-y-auto overflow-x-hidden`}
          >
            <div className="w-full flex flex-col items-start justify-start p-2 md:p-10">
              <ul className="w-full cursor-pointer text-2xl md:text-3xl font-merrieweather text-hill-primary/80">
                <li
                  onClick={() => setIsOpen(false)}
                  className="pl-10 border-l-[5px] border-l-hill-primary/50 hover:border-l-hill-primary hover:text-hill-secondary py-2"
                >
                  Főoldal
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="pl-10 border-l-[5px] border-l-hill-primary/50 hover:border-l-hill-primary hover:text-hill-secondary py-2"
                >
                  <Link href={'/rolunk'}>Rólunk</Link>
                </li>
                <li className="pl-10 border-l-[5px] border-l-hill-primary/50 hover:border-l-hill-primary py-2">
                  <p
                    className="hover:text-hill-secondary"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Szolgáltatások
                  </p>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-karla w-full"
                      >
                        <ServicesMenu handleClose={() => setIsOpen(false)} /> {/* Render Server Component here */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="pl-10 border-l-[5px] border-l-hill-primary/50 hover:border-l-hill-primary hover:text-hill-secondary py-2"
                >
                  <Link href={'/arlista'}>Árlista</Link>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className="pl-10 border-l-[5px] border-l-hill-primary/50 hover:border-l-hill-primary hover:text-hill-primary py-2"
                >
                  Online bejelentkezés
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
