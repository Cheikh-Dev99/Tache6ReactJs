import React, { useState } from "react";
import logo from "../assets/SUNNYSIDE.svg";
import menu from "../assets/menu.png";
import { NavLinks, MobileMenu } from "../utils/Utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <img src={logo} alt="Sunnyside" className="h-10" />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <NavLinks />
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div className="hidden sm:flex">
                    <a
                      className="rounded-full px-5 py-3 text-md font-bold text-white hover:bg-gray-200"
                      href="#"
                    >
                      CONTACT
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <img src={menu} alt="" className="w-[20px] h-[20px]"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <MobileMenu isMenuOpen={isMenuOpen} />
        </div>
      </header>
    </>
  );
}