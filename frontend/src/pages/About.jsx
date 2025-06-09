import { motion } from "framer-motion";

export default function About() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const highlightStyle = {
    color: "var(--primary-color)", // Use primary color variable
    fontWeight: "600",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--background-start) 0%, var(--background-mid) 50%, var(--background-end) 100%)",
        color: "var(--text-color)",
        padding: "4rem 0",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "left",
        }}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 4.2rem)",
              fontWeight: "700",
              marginBottom: "1rem",
              background:
                "linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--tertiary-color))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite",
            }}
          >
            About Me
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.8,
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Discover the passion, process, and perspective that drive my work as
            a Developer, Creator, and Innovator.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div variants={itemVariants} style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
              fontWeight: "600",
              marginBottom: "1.5rem",
              color: "var(--primary-color)",
              borderBottom: "2px solid var(--primary-color)",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            Hello there!
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.9,
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            I'm a dedicated{" "}
            <span style={highlightStyle}>Full-Stack Developer</span> with a
            profound passion for building intuitive, efficient, and impactful
            web applications. My journey in technology is driven by an
            insatiable curiosity for problem-solving and a commitment to
            crafting software that offers real-world value and seamless user
            experiences.
          </p>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}>
            My core expertise lies in developing robust backend systems,
            primarily with <span style={highlightStyle}>Python</span> and the{" "}
            <span style={highlightStyle}>Flask</span> framework, complemented by
            dynamic and responsive frontends built with{" "}
            <span style={highlightStyle}>React</span>. I enjoy the challenge of
            transforming complex ideas into elegant digital solutions.
          </p>
        </motion.div>

        {/* My Philosophy & Approach Section */}
        <motion.div variants={itemVariants} style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
              fontWeight: "600",
              marginBottom: "1.5rem",
              color: "var(--secondary-color)",
              borderBottom: "2px solid var(--secondary-color)",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            My Philosophy & Approach
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.9,
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            I believe that exceptional software is born from a synergy of{" "}
            <span style={highlightStyle}>clean, maintainable code</span>,{" "}
            <span style={highlightStyle}>thoughtful, user-centric design</span>,
            and effective <span style={highlightStyle}>problem-solving</span>.
            My development process emphasizes not just functionality, but also
            scalability and the overall user experience.
          </p>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}>
            The ever-evolving nature of technology excites me. I am a firm
            believer in <span style={highlightStyle}>continuous learning</span>{" "}
            and actively seek out new technologies, development methodologies,
            and best practices. This commitment helps me refine my skills,
            innovate, and deliver solutions that are both current and
            future-ready.
          </p>
        </motion.div>

        {/* Key Areas of Focus Section */}
        <motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
              fontWeight: "600",
              marginBottom: "1.5rem",
              color: "var(--tertiary-color)",
              borderBottom: "2px solid var(--tertiary-color)",
              paddingBottom: "0.5rem",
              display: "inline-block",
            }}
          >
            Key Areas of Focus
          </h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {[
              "Full-Stack Web Development (Python/Flask, React/JavaScript)",
              "RESTful API Design & Implementation",
              "Database Architecture & Management (e.g., PostgreSQL, MongoDB)",
              "Responsive UI/UX Design Principles",
              "Version Control & Collaborative Development (Git/GitHub)",
              "Agile Project Management Methodologies",
            ].map((skill, index) => (
              <motion.li
                key={index}
                style={{
                  fontSize: "1.1rem",
                  opacity: 0.9,
                  lineHeight: 1.8,
                  marginBottom: "0.85rem",
                  paddingLeft: "1.75rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "2px",
                    color: "var(--primary-color)",
                    fontSize: "1.2em",
                  }}
                >
                  ▹
                </span>{" "}
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Concluding Thought */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: "center", marginTop: "2rem", opacity: 0.8 }}
        >
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
            I'm always enthusiastic about connecting, collaborating, and
            contributing to innovative projects.
            <br />
            Feel free to explore{" "}
            <a
              href="/projects"
              style={{
                color: "var(--primary-color)",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              my work
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              style={{
                color: "var(--primary-color)",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              get in touch
            </a>
            !
          </p>
        </motion.div>
      </motion.div>

      <style jsx>{`
        /* Keyframes are global, so no need to redefine if already in index.css */
        /* Optional: Style for links in the conclusion */
        a:hover {
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
}
