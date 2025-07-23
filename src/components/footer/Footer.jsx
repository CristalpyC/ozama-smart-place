"use client";
import React from "react";
import logo from "../../imgs/osp-logo.png";
import Image from "next/image";
import "animate.css";

export const Footer = () => {
  const menuItems = [
    { label: "Inicio", link: "home" },
    { label: "Sobre nosotros", link: "about" },
    { label: "Solución", link: "solution" },
    { label: "Preguntas frecuentes", link: "questions" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbarOffset = 115;

    if (element) {
      const yOffset =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarOffset;

      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#E0F7DB] rounded-lg py-8 shadow-sm dark:bg-gray-900 text-center lg:text-left">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Logo y nombre */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-3">
            <Image src={logo} alt="OSP Logo" className="w-20 h-auto" />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ozama Smart Place
            </span>
          </div>

          {/* Menú */}
          <ul className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.link);
                  }}
                  className="hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-green-700 sm:mx-auto lg:my-8" />

        {/* Derechos reservados */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © 2025 <span className="font-medium">C.A.R. TEAM</span>. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};
