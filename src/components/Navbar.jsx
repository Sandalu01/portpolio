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
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto ${styles.liquidGlassCard} px-6 py-4 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-white/10' : 'backdrop-blur-lg bg-white/5'
      }`}>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={sandalu} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Sandalu &nbsp;
            <span className='sm:block hidden'> Thushan</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gray-300"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a 
                href={`#${nav.id}`} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  active === nav.title ? styles.liquidGlassCard : "hover:bg-white/5"
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
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div 
            className={`w-[40px] h-[40px] ${styles.liquidGlassCard} flex items-center justify-center cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[20px] h-[20px] object-contain'
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } ${styles.liquidGlassCard} absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 p-6 backdrop-blur-[40px] bg-white/20`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] w-full ${
                    active === nav.title ? "text-white" : "text-gray-300"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a 
                    href={`#${nav.id}`} 
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                      active === nav.title ? styles.liquidGlassCard : "hover:bg-white/5"
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
