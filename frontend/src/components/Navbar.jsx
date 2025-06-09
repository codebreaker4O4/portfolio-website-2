import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext.jsx"; // Import useTheme

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👨‍💻" },
    { path: "/projects", label: "Projects", icon: "🚀" },
    { path: "/contact", label: "Contact", icon: "📧" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem 2rem",
          background: isScrolled
            ? "var(--navbar-scrolled-background)"
            : "var(--navbar-background)",
          backdropFilter: "blur(20px)",
          borderBottom: isScrolled
            ? "1px solid var(--navbar-border-bottom)"
            : "none",
          transition: "all 0.3s ease",
          boxShadow: isScrolled ? "var(--navbar-shadow)" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                background:
                  "linear-gradient(45deg, var(--primary-color), var(--secondary-color))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>💼</span>
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ position: "relative" }}
              >
                <Link
                  to={item.path}
                  style={{
                    color:
                      location.pathname === item.path
                        ? "var(--primary-color)"
                        : "var(--text-color)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "25px",
                    background:
                      location.pathname === item.path
                        ? "rgba(102, 126, 234, 0.1)" // Still using a fixed rgba for active background for specific glow
                        : "transparent",
                    border:
                      location.pathname === item.path
                        ? "1px solid rgba(102, 126, 234, 0.3)" // Still using a fixed rgba for active border
                        : "1px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <span
                    style={{
                      display: window.innerWidth > 768 ? "block" : "none",
                    }}
                  >
                    {item.label}
                  </span>
                </Link>

                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: "absolute",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg, var(--primary-color), var(--secondary-color))",
                      boxShadow: "0 0 10px rgba(102, 126, 234, 0.6)", // Fixed rgba for glow
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}

            {/* Theme toggle button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "rgba(255, 255, 255, 0.1)", // Fixed rgba for button background
                border: "1px solid rgba(255, 255, 255, 0.2)", // Fixed rgba for button border
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "var(--text-color)",
                backdropFilter: "blur(10px)",
              }}
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}{" "}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: window.innerWidth <= 768 ? "flex" : "none",
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.3)", // Fixed rgba for border
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "var(--text-color)",
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? "✕" : "☰"}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "var(--navbar-background)", // Using navbar background
                backdropFilter: "blur(20px)",
                borderTop: "1px solid var(--navbar-border-bottom)", // Using navbar border
                padding: "1rem",
                boxShadow: "var(--navbar-shadow)", // Using navbar shadow
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={mobileItemVariants}
                  style={{ marginBottom: "1rem" }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      color:
                        location.pathname === item.path
                          ? "var(--primary-color)"
                          : "var(--text-color)",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem",
                      borderRadius: "12px",
                      background:
                        location.pathname === item.path
                          ? "rgba(102, 126, 234, 0.1)" // Fixed rgba for active background
                          : "rgba(255, 255, 255, 0.05)", // Fixed rgba for inactive background
                      border: "1px solid rgba(255, 255, 255, 0.1)", // Fixed rgba for border
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div style={{ height: "80px" }} />
    </>
  );
}
