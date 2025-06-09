import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Developer", "Creator", "Problem Solver", "Innovator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = texts[currentIndex];
    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "var(--button-hover-shadow)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, var(--background-start) 0%, var(--background-mid) 50%, var(--background-end) 100%)",
        color: "var(--text-color)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background particles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
        `,
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          zIndex: 1,
          maxWidth: "800px",
          padding: "2rem",
        }}
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: "700",
              marginBottom: "1rem",
              background:
                "linear-gradient(45deg, var(--text-color), var(--text-color))" /* Using text-color for gradient */,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Hi, I'm a{" "}
            <span
              style={{
                color: "var(--primary-color)" /* Using primary color */,
                textShadow: "0 0 20px rgba(96, 245, 255, 0.5)", // Fixed rgba for glow
              }}
            >
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: "var(--text-color)" }}
              >
                |
              </motion.span>
            </span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              marginBottom: "2rem",
              opacity: 0.9,
              lineHeight: 1.6,
              fontWeight: "300",
            }}
          >
            I build full-stack applications with Python & React.
            <br />
            Passionate about creating seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            style={{
              background: "rgba(255, 255, 255, 0.1)", // Fixed rgba for button background
              border: "2px solid rgba(255, 255, 255, 0.3)", // Fixed rgba for button border
              padding: "12px 24px",
              borderRadius: "30px",
              color: "var(--text-color)",
              fontSize: "1.1rem",
              fontWeight: "500",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
            onClick={() => (window.location.href = "/projects")}
          >
            View My Work
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            style={{
              background: "var(--button-background)",
              border: "none",
              padding: "12px 24px",
              borderRadius: "30px",
              color: "var(--text-color)",
              fontSize: "1.1rem",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Fixed rgba for shadow
            }}
            onClick={() => (window.location.href = "/contact")}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} style={{ marginTop: "3rem" }}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: "2rem",
              opacity: 0.7,
              cursor: "pointer",
            }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(1deg);
          }
          66% {
            transform: translateY(-20px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
}
