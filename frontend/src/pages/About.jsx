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
            Hey there! I’m a backend developer who enjoys solving problems with{" "}
            <span style={highlightStyle}>Python</span> and building systems that
            just work. I spend most of my time working with{" "}
            <span style={highlightStyle}>Flask</span> and cloud tools to create
            APIs, microservices, and backend systems that are both solid and
            scalable.
          </p>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}>
            I’ve built projects like an AI-powered resume evaluator, a
            microservice for image editing and storage, and backends for design
            collaboration tools. I enjoy writing clean code, making systems run
            faster, and occasionally automating boring stuff just for fun. When
            needed, I also build out frontends in{" "}
            <span style={highlightStyle}>React</span> to complete the picture.
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
            I believe good software feels invisible — it just does what you
            need, when you need it. That’s why I focus on writing code that’s
            not only functional, but also easy to maintain and scale.
          </p>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, lineHeight: 1.7 }}>
            I'm a big believer in{" "}
            <span style={highlightStyle}>continuous learning</span>. Whether
            it’s a new tool, framework, or approach, I enjoy staying up to date
            and experimenting with better ways to build and ship software.
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
              "Backend Development with Python (Flask, FastAPI)",
              "RESTful API Design and Integration",
              "Cloud Storage & Services (Azure Blob Storage)",
              "Image Processing & File Handling (Pillow, MIME types)",
              "Database Design & Querying (PostgreSQL, MongoDB)",
              "Authentication & Authorization (JWT, OAuth basics)",
              "CI/CD Pipelines & GitHub Workflows",
              "Frontend Integration using React & Fetch API",
              "Clean Code Practices & Modular Architecture",
              "Debugging, Logging, and API Testing (Postman, Pytest)",
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
