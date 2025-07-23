"use client";
import React, { useState } from "react";
import ospLogo from "../../imgs/osp-logo.png";
import Image from "next/image";

export const NavBar = () => {
  const LIGHT_GREEN = "#5DCC6F";
  const SECONDARY_GREEN = "#E0F7DB";

  const menuItems = [
    { label: "Inicio", link: "home" },
    { label: "Sobre nosotros", link: "about" },
    { label: "Solución", link: "solution" },
    { label: "Preguntas frecuentes", link: "questions" },
  ];

  const [isOpen, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const navbarOffset = navbar ? navbar.offsetHeight : 55;

    if (element) {
      const yOffset =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarOffset;

      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });

      setOpen(false); // Cierra el menú móvil después del click
    }
  };

  const handleOpen = () => setOpen(!isOpen);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={ospLogo} className="mr-5 w-20 h-15" alt="logo" />
          <span className="self-center md:text-md lg:text-xl italic block font-semibold whitespace-nowrap dark:text-white">
            Ozama Smart Place
          </span>
        </a>

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
              <li key={index}>
                <a
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.link);
                  }}
                  className="block py-2 px-3 text-[#132c17] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#5DCC6F] md:p-0 dark:text-green-500 dark:hover:text-green-400 dark:border-gray-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 bg-white h-[100vh] dark:bg-gray-900"
        >
          <ul className="flex flex-col font-medium text-center space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.link);
                  }}
                  className="block py-2 px-3 text-[#132c17] border-b border-gray-100 hover:bg-gray-50 dark:text-green-500 dark:hover:text-green-400 dark:border-gray-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
