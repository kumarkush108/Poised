import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Logo-1.png";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="topbar"
      >
        <img src={logo} alt="Logo" className="logo" />

        <div className="right-actions">
          <button className="quote-btn">REQUEST A QUOTE</button>

          <button className="menu-btn" onClick={() => setOpen(true)}>
            ☰ MENU
          </button>
        </div>
      </motion.header>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="drawer open"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <nav className="drawer-nav">
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)}>
                About
              </NavLink>
              <NavLink to="/solutions" onClick={() => setOpen(false)}>
                Solutions
              </NavLink>
              <NavLink to="/services" onClick={() => setOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>
                Contact
              </NavLink>

              {/* MOBILE ONLY QUOTE BUTTON */}
              <button className="drawer-quote-btn">
                REQUEST A QUOTE
              </button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
