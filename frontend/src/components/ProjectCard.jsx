import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateY: -10,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
    hover: {
      y: -12,
      scale: 1.03,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  // Generate a unique gradient based on project name
  const getProjectGradient = (name) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    ];
    const index = name.length % gradients.length;
    return gradients[index];
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{
        position: "relative",
        background: "var(--card-background)",
        backdropFilter: "blur(25px)",
        borderRadius: "24px",
        padding: "0",
        border: "1px solid var(--card-border)",
        overflow: "hidden",
        cursor: "pointer",
        height: "320px",
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onClick={() => window.open(project.github, "_blank")}
    >
      {/* Animated background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: getProjectGradient(project.name),
          opacity: 0.8,
        }}
      />

      {/* Floating particles effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Hover overlay effect */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        whileHover="hover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--card-glow-overlay)",
          borderRadius: "24px",
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <motion.div
        variants={contentVariants}
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          zIndex: 2,
        }}
      >
        {/* Header with status */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "600",
              background:
                project.status === "active"
                  ? "var(--status-active-background)"
                  : "var(--status-inactive-background)",
              color: "var(--text-color)",
              border: `1px solid ${
                project.status === "active"
                  ? "rgba(34, 197, 94, 0.3)" // Fixed rgba for status border
                  : "rgba(239, 68, 68, 0.3)" // Fixed rgba for status border
              }`,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor:
                  project.status === "active"
                    ? "var(--status-active-color)"
                    : "var(--status-inactive-color)",
                display: "inline-block",
              }}
            />
            {project.status}
          </div>

          {/* Project icon/emoji */}
          <div
            style={{
              fontSize: "2rem",
              opacity: 0.7,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))", // Fixed rgba for shadow
              color: "var(--text-color)",
            }}
          >
            🚀
          </div>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "0.8rem",
            color: "var(--text-color)",
            lineHeight: 1.2,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)", // Fixed rgba for shadow
          }}
        >
          {project.name}
        </h3>

        {/* Project Description */}
        <p
          style={{
            fontSize: "1rem",
            opacity: 0.85,
            lineHeight: 1.5,
            marginBottom: "auto",
            color: "var(--text-color)",
          }}
        >
          {project.description}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
            marginTop: "1.5rem",
          }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "10px 18px",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.15)", // Fixed rgba for background
              color: "var(--text-color)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "600",
              border: "1px solid rgba(255, 255, 255, 0.25)", // Fixed rgba for border
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              backdropFilter: "blur(10px)",
              flex: 1,
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.25)"; // Fixed rgba for hover
              e.target.style.borderColor = "rgba(255, 255, 255, 0.4)"; // Fixed rgba for hover
              e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)"; // Fixed rgba for shadow
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.15)"; // Fixed rgba for hover
              e.target.style.borderColor = "rgba(255, 255, 255, 0.25)"; // Fixed rgba for hover
              e.target.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>💻</span>
            View Code
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "10px 18px",
              borderRadius: "16px",
              background: "var(--button-background)",
              color: "var(--text-color)",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Add demo functionality here
              console.log(`Demo for ${project.name}`);
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "var(--button-hover-shadow)";
              e.target.style.transform = "translateY(-2px) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "none";
              e.target.style.transform = "none";
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🎯</span>
            Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Subtle border glow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "24px",
          padding: "1px",
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent, rgba(255, 255, 255, 0.1))", // Fixed rgba for border glow
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}
