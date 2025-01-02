import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-4")
        }
        dir="rtl"
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          {/* Logo Section */}
          <div className="col-start-1 col-end-2 flex items-center">
            <img
              src="/assets/Logo.png"
              alt="الشعار"
              className="h-12 w-auto scale-150"
              style={{ transform: "scale(1.50)" }}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex col-start-4 col-end-8 items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveLink("about")}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              الرئيسية
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveLink("feature")}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              المسارات
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveLink("pricing")}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              الأهداف
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveLink("testimoni")}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active"
                  : " text-black-500 hover:text-orange-500")
              }
            >
              الجوائز
            </LinkScroll>
          </ul>

          {/* Actions + Hamburger */}
          <div className="col-start-10 col-end-12 flex justify-end items-center">
            <Link href="/register" passHref>
              <a>
                <ButtonOutline>سجل الآن</ButtonOutline>
              </a>
            </Link>
            {/* Hamburger Icon - Visible on mobile only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-black-500 p-2 ml-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {!isMenuOpen ? (
                  // Hamburger (closed) icon
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm16 6H4v2h16v-2z"
                  />
                ) : (
                  // X (open) icon
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.225 4.811l13.332 13.332-1.414 1.414L4.811 6.225l1.414-1.414zm13.332 1.414L6.225 19.557l-1.414-1.414 13.332-13.332 1.414 1.414z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden bg-white-500 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-start px-6 py-4 text-black-500 border-t">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setActiveLink("about");
                setIsMenuOpen(false);
              }}
              className={
                "py-2 w-full animation-hover" +
                (activeLink === "about"
                  ? " text-orange-500"
                  : " hover:text-orange-500")
              }
            >
              الرئيسية
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setActiveLink("feature");
                setIsMenuOpen(false);
              }}
              className={
                "py-2 w-full animation-hover" +
                (activeLink === "feature"
                  ? " text-orange-500"
                  : " hover:text-orange-500")
              }
            >
              المسارات
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setActiveLink("pricing");
                setIsMenuOpen(false);
              }}
              className={
                "py-2 w-full animation-hover" +
                (activeLink === "pricing"
                  ? " text-orange-500"
                  : " hover:text-orange-500")
              }
            >
              الأهداف
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => {
                setActiveLink("testimoni");
                setIsMenuOpen(false);
              }}
              className={
                "py-2 w-full animation-hover" +
                (activeLink === "testimoni"
                  ? " text-orange-500"
                  : " hover:text-orange-500")
              }
            >
              الجوائز
            </LinkScroll>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
