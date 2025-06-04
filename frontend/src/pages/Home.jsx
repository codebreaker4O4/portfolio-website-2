import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and get in touch!</p>
      </div>
    </motion.div>
  );
}
