import { motion } from "framer-motion";
export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <div
        style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem 0" }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </div>
    </motion.div>
  );
}
