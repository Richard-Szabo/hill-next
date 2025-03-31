"use client";

import { FaPhone } from "react-icons/fa";
import CompanyLogo from "../Shared/Media/CompanyLogo";
import { contactData } from "@/data/Static/contact";
import { FiMail } from "react-icons/fi";
import HamburgerMenu from "../Navigation/HamburgerMenu";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import { Toaster } from "sonner";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "h-16 shadow-md " : "lg:h-fit "
      }`}
    >
      <nav className="w-full flex justify-between items-center py-2 lg:py-5 px-2 lg:px-4 h-full border-b">
        {/* Left Section Mobile */}
        <Link href={'/'} className="flex lg:hidden items-center  justify-start w-full max-w-1/3" aria-label="HillMedical Főoldal!">
          <CompanyLogo
            className={` h-10 w-10 lg:h-16 lg:w-16`}
            fill="#576d2c"
          />
        </Link>
        {/* Left Section Desktop */}
        <div
          className={`hidden lg:flex lg:pl-4 ${
            isScrolled
              ? "flex-row justify-start items-center gap-5"
              : "flex-col justify-center items-start gap-1"
          }     text-hill-primary font-merrieweather text-lg w-full max-w-1/3 `}
        >
          <a
          aria-label="Hívjon minket!"
            href={`tel:${contactData.phone_href}`}
            className="flex flex-row items-center justify-start gap-2"
          >
            <FaPhone size={24} className="hover:text-hill-secondary" />
            {!isScrolled && (
              <span className="hover:text-hill-secondary cursor-pointer transition-all duration-300">
                {contactData.phone_display}
              </span>
            )}
          </a>

          <a
          aria-label="Küldjön e-mailt nekünk!"
            href={`mailto:${contactData.email}`}
            className="flex flex-row items-center justify-start gap-2"
          >
            <FiMail size={24} className="hover:text-hill-secondary" />
            {!isScrolled && (
              <span className="hover:text-hill-secondary cursor-pointer transition-all duration-300">
                {contactData.email}
              </span>
            )}
          </a>

          <Link
            href={"/#kapcsolat"}
            className="flex flex-row items-center justify-start gap-2"
          >
            <span className="cursor-pointer transition-all duration-300 bg-hill-primary py-1 px-3 rounded-xl text-white font-medium text-md hover:bg-hill-secondary">
              Online bejelentkezés
            </span>
          </Link>
        </div>

        {/* Center Section */}
        <div
          className={`grow flex items-center justify-center w-full max-w-1/3 ${
            isScrolled ? "flex-row" : "flex-col"
          }`}
        >
          <Link href={'/'} aria-label="HillMedical Főoldal!">
          <CompanyLogo
            className={`hidden lg:block transition-all duration-300 ${
              isScrolled ? "w-24 h-12" : "w-36 h-16"
            }`}
            fill="#576d2c"
          />
          </Link>
          
          <div>
            <h1 className="uppercase text-hill-primary text-lg lg:text-3xl font-bold tracking-wider text-center text-shadow shadow-[#2f2f2f]/80 font-karla whitespace-nowrap notranslate">
              hill medical
            </h1>
            <div
              className={`relative flex
            justify-center items-center w-40 lg:w-52`}
            >
              <div className="flex items-center gap-2 w-full">
                <div className="flex-1 border-b border-black"></div>
                <p className="text-center whitespace-nowrap text-xs lg:text-md font-medium font-karla uppercase text-hill-secondary">
                  Családi Fogászat
                </p>
                <div className="flex-1 border-b border-black"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full max-w-1/3 flex flex-row justify-end items-center lg:pr-4 gap-3">
          <div
            className={`hidden lg:flex flex-col items-start justify-center font-merrieweather text-hill-primary text-light ${
              isScrolled ? "text-sm" : "text-lg"
            } gap-1 pr-6`}
          >
            {!isScrolled && <p className={`text-gray-500 `}>Elérhetőségünk</p>}
            <a
              href={contactData.address_href}
              target="_blank"
              className="space-y-2 hover:text-hill-secondary cursor-pointer transition-all duration-300 "
            >
              <p>
                {contactData.address.postcode} {contactData.address.city}
              </p>
              <p>{contactData.address.street}</p>
            </a>
          </div>

          <div>
            <HamburgerMenu />
          </div>
        </div>
      </nav>
      {/* Mobile bar */}
      <nav className="flex lg:hidden border-b shadow-xl w-full py-2 justify-between px-3 bg-white">
        <div className="flex gap-6 justify-start items-center">
          <a
          aria-label="Hívjon minket!"
            href={`tel:${contactData.phone_href}`}
            className="flex flex-row items-center justify-start "
          >
            <FaPhone size={24} className="text-hill-secondary" />
          </a>
          <button>
            <a
            aria-label="Küldjön e-mailt nekünk!"
              href={`mailto:${contactData.email}`}
              className="flex flex-row items-center justify-start"
            >
              <FiMail size={28} className="text-hill-secondary" />
            </a>
          </button>
        </div>
        <Link
            href={"/#kapcsolat-mobile"}
            className="flex flex-row items-center justify-start gap-2"
          >
            <span className="cursor-pointer transition-all duration-300 bg-hill-secondary py-1 px-3 rounded-xl text-white font-medium text-md hover:bg-hill-secondary">
              Online bejelentkezés
            </span>
          </Link>
      </nav>
      <Toaster />
    </header>
  );
}
