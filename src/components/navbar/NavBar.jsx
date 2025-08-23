"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ospLogo from "../../imgs/osp-logo.png";

export const NavBar = () => {
  const menuItems = [
    { label: "Inicio", link: "home", type: "section" },
    { label: "Ciudadanos", link: "/mobile", type: "page" },
    { label: "Instituciones", link: "/dashboard", type: "page" },
    { label: "Sobre nosotros", link: "about", type: "section" },
    { label: "Preguntas frecuentes", link: "questions", type: "section" }
  ];

  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const navbarOffset = navbar ? navbar.offsetHeight : 55;

    if (element) {
      const yOffset =
        element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleOpen = () => setOpen(!isOpen);

  const handleClick = (e, item) => {
    if (item.type === "section" && pathname === "/") {
      e.preventDefault();
      handleScroll(item.link);
    }
    setOpen(false);
  };

  const renderLink = (item) => {
    if (item.type === "page") {
      return (
        <Link
          href={item.link}
          className="block py-2 px-3 md:p-0 text-[#132c17] hover:text-[#5DCC6F] dark:text-green-500 dark:hover:text-green-400"
        >
          {item.label}
        </Link>
      );
    }
    // Para secciones, usamos href normal y scroll smooth
    const href = pathname === "/" ? `#${item.link}` : `/#${item.link}`;
    return (
      <a
        href={href}
        onClick={(e) => handleClick(e, item)}
        className="block py-2 px-3 md:p-0 text-[#132c17] hover:text-[#5DCC6F] dark:text-green-500 dark:hover:text-green-400"
      >
        {item.label}
      </a>
    );
  };

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={ospLogo} className="w-20 h-15" alt="logo" />
        </Link>

        {/* Burger Button */}
        <div className="md:hidden">
          <button
            onClick={handleOpen}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <li key={index}>{renderLink(item)}</li>
            ))}
            <li>
              <a
                href="/#trailer"
                className="text-white w-45 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 mt-5 text-center me-2 mb-2">
                Ver en acción
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 h-[100vh]"
        >
          <ul className="flex flex-col font-medium text-center space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>{renderLink(item)}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
