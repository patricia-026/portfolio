import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import NavbarMenu from "./menu/NavbarMenu";
import Logo from "./menu/Logo";
import HamburgerMenu from "./menu/HamburgerMenu.js";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full h-24 shadow-xl bg-dark-blue z-50">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <Logo />

          <NavbarMenu />

          <AnimatePresence>
            <div onClick={handleNav} className="sm:hidden cursor-pointer">
              {menuOpen ? (
                <div>
                  <AiOutlineClose size={25} className="text-cream" />
                </div>
              ) : (
                <div>
                  <AiOutlineMenu size={25} className="text-cream" />
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
        <HamburgerMenu closeMenu={closeMenu} menuOpen={menuOpen} />
      </nav>

      {/* overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="sm:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
