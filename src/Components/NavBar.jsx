import { useState, useEffect } from "react";
import LOGO from "../assets/images/LOGO.webp";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#productos", label: "Productos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      let currentSection = "#inicio";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= offset) {
            currentSection = link.href;
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="letra-2 fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-[135px]">
              <img src={LOGO} alt="logo" />
            </div>
          </div>

          {/* Burger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          {/* Navitems */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all ${
                  activeLink === link.href
                    ? "text-cyan-500 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-cyan-500"
                      : "text-gray-900 "
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
