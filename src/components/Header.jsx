import React, { useState, useEffect, useRef } from "react";
import { navItems } from "../constant/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navItems[0].id);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <a href="#" className="text-3xl font-semibold">
          Portfólio
        </a>

        {/* Mobile Menu */}
        <nav
          className={`lg:hidden absolute top-0 left-0 bg-secondary-clr/70 backdrop-blur-2xl w-full max-h-0 overflow-hidden mt-20 flex justify-center items-center transition-[max-height] duration-300 z-20 ease-in-out ${
            isOpen ? "max-h-[500px] overflow-auto" : ""
          }`}
        >
          <ul className="text-center p-7 space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`text-lg py-3 relative after:absolute after:bottom-0 after:left-0 after:bg-[#1EBEF2] after:block after:w-0 after:h-0.5 after:rounded after:transition-[width] hover:after:w-full after:origin-left duration-300 ${
                    activeLink === item.id
                      ? "after:w-full after:bg-[#1EBEF2]"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Lg menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`text-lg py-3 relative after:absolute after:bottom-0 after:left-0 after:bg-[#1EBEF2] after:block after:w-0 after:h-0.5 after:rounded after:transition-[width] hover:after:w-full after:origin-left duration-300 ${
                  activeLink === item.id
                    ? "after:w-full after:bg-[#1EBEF2]"
                    : ""
                }`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* menu btn */}
        <button
          className="lg:hidden relative h-7 w-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute w-7 h-0.5 bg-white rounded-2xl transition-all duration-300  ${
              isOpen ? "rotate-45 top-1/2" : "top-[6px]"
            }`}
          ></span>
          <span
            className={`absolute w-7 h-0.5 bg-white rounded-2xl transition-all duration-300  ${
              isOpen ? "-rotate-45 top-1/2" : "top-[14px]"
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
