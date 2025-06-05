import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchProjects } from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.status === filter;
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "white",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: "50px",
            height: "50px",
            border: "3px solid rgba(102, 126, 234, 0.3)",
            borderTop: "3px solid #667eea",
            borderRadius: "50%",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "white",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: "700",
                marginBottom: "1rem",
                background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradient 3s ease infinite",
              }}
            >
              My Projects
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.8,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Explore my collection of projects showcasing various technologies
              and solutions
            </p>
          </motion.div>

          {/* Filter and Search Section */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "3rem",
              alignItems: "center",
            }}
          >
            {/* Search Bar */}
            <div
              style={{ position: "relative", width: "100%", maxWidth: "400px" }}
            >
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 20px 12px 50px",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "30px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow =
                    "0 0 20px rgba(102, 126, 234, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.2rem",
                  opacity: 0.6,
                }}
              >
                🔍
              </div>
            </div>

            {/* Filter Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {["all", "active", "inactive"].map((status) => (
                <motion.button
                  key={status}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(status)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "20px",
                    border: "2px solid",
                    borderColor:
                      filter === status
                        ? "#667eea"
                        : "rgba(255, 255, 255, 0.3)",
                    background:
                      filter === status
                        ? "linear-gradient(45deg, #667eea, #764ba2)"
                        : "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {status === "all" ? "All Projects" : status}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: "2rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => window.open(project.github, "_blank")}
                >
                  {/* Status Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      padding: "4px 12px",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      background:
                        project.status === "active"
                          ? "linear-gradient(45deg, #4ade80, #22c55e)"
                          : "linear-gradient(45deg, #f97316, #ea580c)",
                      color: "white",
                      textTransform: "capitalize",
                    }}
                  >
                    {project.status}
                  </div>

                  {/* Project Content */}
                  <div style={{ marginTop: "1rem" }}>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "#667eea",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        opacity: 0.8,
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Project Links */}
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          transition: "all 0.3s ease",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span style={{ fontSize: "1.1rem" }}>⚡</span>
                        View Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover Effect Background */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: "none",
                      borderRadius: "20px",
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                textAlign: "center",
                padding: "3rem",
                opacity: 0.6,
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                No projects found
              </h3>
              <p>Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}
