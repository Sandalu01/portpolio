import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close,sun,thushan,sandalu} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20`}>
      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto ${styles.appleGlassStrong} px-6 py-3 transition-all duration-500 ease-out ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/15 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)]' 
          : 'backdrop-blur-lg bg-white/8 border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
      }`}>
        <Link
          to='/'
          className='flex items-center gap-3 group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img src={sandalu} alt='logo' className='w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105' />
            <div className="absolute inset-0 w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p className='text-white apple-title-large cursor-pointer flex items-center group-hover:text-gray-100 transition-colors duration-300'>
            Sandalu
            <span className='sm:block hidden ml-1 apple-text-gradient-blue'>Thushan</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-2'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="relative"
              onClick={() => setActive(nav.title)}
            >
              <a 
                href={`#${nav.id}`} 
                className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 ease-out apple-body-medium font-medium cursor-pointer group ${
                  active === nav.title 
                    ? 'text-white bg-white/15 shadow-[0_4px_16px_rgba(255,255,255,0.1)]' 
                    : 'text-gray-300 hover:text-white hover:bg-white/8'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(nav.id);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {nav.title}
                {/* Active indicator */}
                {active === nav.title && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-lg"></div>
                )}
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div 
            className={`w-11 h-11 ${styles.appleGlass} flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/10`}
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-5 h-5 object-contain filter brightness-0 invert transition-transform duration-300'
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden opacity-0 translate-y-[-20px]" : "flex opacity-100 translate-y-0"
            } ${styles.appleGlassStrong} absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 p-6 transition-all duration-500 ease-out backdrop-blur-xl bg-white/15 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-2'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="w-full"
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a 
                    href={`#${nav.id}`} 
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 ease-out apple-body-medium font-medium cursor-pointer group ${
                      active === nav.title 
                        ? 'text-white bg-white/20 shadow-[0_4px_16px_rgba(255,255,255,0.1)]' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(nav.id);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    {nav.title}
                    {/* Active indicator */}
                    {active === nav.title && (
                      <div className="inline-block ml-2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
