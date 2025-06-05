import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../services/api"; // Assuming this path and function exist

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ message: "", isError: false, isSubmitting: true });
    try {
      // Assuming sendContactMessage returns a promise that resolves to an object like { message: "Success!" }
      // or throws an error with a message property.
      const result = await sendContactMessage(form);
      setSubmissionStatus({
        message:
          result?.message ||
          "Message sent successfully! I'll be in touch soon.",
        isError: false,
        isSubmitting: false,
      });
      setForm({ name: "", email: "", message: "" }); // Clear form on success
    } catch (error) {
      setSubmissionStatus({
        message:
          error?.message ||
          "Sorry, there was an error sending your message. Please try again.",
        isError: true,
        isSubmitting: false,
      });
    }
  };

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

  const inputBaseStyle = {
    width: "100%",
    padding: "15px 20px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(8px)", // Subtle blur for input background
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const inputFocusStyle = {
    borderColor: "#667eea",
    boxShadow: "0 0 15px rgba(102, 126, 234, 0.3)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.6rem",
    fontSize: "0.95rem",
    opacity: 0.85,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.8)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", // Consistent background
        color: "white",
        padding: "4rem 1rem", // Added horizontal padding for smaller screens
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "700px",
          width: "100%", // Take full width up to maxWidth
          margin: "0 auto",
          padding: "2.5rem 3rem", // Adjusted padding
          background: "rgba(30, 41, 59, 0.5)", // Darker, less transparent card background for better contrast
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: "center",
            marginBottom: "3rem", // Increased margin
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              fontWeight: "700",
              marginBottom: "0.75rem", // Adjusted margin
              background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)", // Consistent gradient text
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.8,
              lineHeight: 1.6,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Have a question, a project idea, or just want to connect? I'd love
            to hear from you!
          </p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} variants={itemVariants}>
          <div style={{ marginBottom: "1.75rem" }}>
            {" "}
            {/* Increased spacing */}
            <label htmlFor="name" style={labelStyle}>
              Full Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              placeholder="e.g., Ada Lovelace"
              value={form.name}
              onChange={handleChange}
              required
              style={inputBaseStyle}
              whileFocus={inputFocusStyle}
            />
          </div>

          <div style={{ marginBottom: "1.75rem" }}>
            <label htmlFor="email" style={labelStyle}>
              Email Address
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              placeholder="e.g., ada@example.com"
              value={form.email}
              onChange={handleChange}
              required
              style={inputBaseStyle}
              whileFocus={inputFocusStyle}
            />
          </div>

          <div style={{ marginBottom: "2.25rem" }}>
            {" "}
            {/* Increased spacing */}
            <label htmlFor="message" style={labelStyle}>
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="Let's talk about..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                ...inputBaseStyle,
                resize: "vertical",
                minHeight: "130px",
              }}
              whileFocus={inputFocusStyle}
            />
          </div>

          <motion.button
            type="submit"
            disabled={submissionStatus.isSubmitting}
            style={{
              width: "100%",
              padding: "16px 22px", // Slightly larger button
              borderRadius: "10px",
              border: "none",
              background: submissionStatus.isSubmitting
                ? "rgba(100, 116, 139, 0.8)" // Muted color for disabled state
                : "linear-gradient(45deg, #667eea, #764ba2)",
              color: "white",
              fontSize: "1.15rem", // Slightly larger font
              fontWeight: "600",
              cursor: submissionStatus.isSubmitting ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
            }}
            whileHover={{
              scale: submissionStatus.isSubmitting ? 1 : 1.03,
              boxShadow: submissionStatus.isSubmitting
                ? "0 5px 15px rgba(0, 0, 0, 0.15)"
                : "0 7px 25px rgba(102, 126, 234, 0.35)",
            }}
            whileTap={{ scale: submissionStatus.isSubmitting ? 1 : 0.97 }}
          >
            {submissionStatus.isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {submissionStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                marginTop: "1.75rem",
                textAlign: "center",
                fontSize: "1rem",
                padding: "12px 15px",
                borderRadius: "8px",
                background: submissionStatus.isError
                  ? "rgba(239, 68, 68, 0.15)"
                  : "rgba(34, 197, 94, 0.15)", // Using Tailwind-like colors for error/success bg
                color: submissionStatus.isError ? "#fca5a5" : "#a7f3d0", // Lighter text colors
                border: `1px solid ${
                  submissionStatus.isError
                    ? "rgba(239, 68, 68, 0.3)"
                    : "rgba(34, 197, 94, 0.3)"
                }`,
              }}
            >
              {submissionStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          /* For the H1 gradient animation */
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
        /* Improved Autofill Styles */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          -webkit-text-fill-color: white !important; /* Ensure text is white */
          -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.05) inset !important; /* Match input background */
          transition: background-color 5000s ease-in-out 0s !important;
          background-clip: content-box !important; /* Fix for some browsers showing white corners */
          caret-color: white !important;
        }
        /* Placeholder styling */
        ::placeholder {
          color: rgba(255, 255, 255, 0.45); /* Slightly lighter placeholder */
          opacity: 1; /* Firefox */
        }
      `}</style>
    </div>
  );
}
