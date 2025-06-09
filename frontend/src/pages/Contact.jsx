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
    border: "2px solid var(--input-border)",
    borderRadius: "10px",
    background: "var(--input-background)",
    backdropFilter: "blur(8px)",
    color: "var(--text-color)",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const inputFocusStyle = {
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 15px rgba(102, 126, 234, 0.3)", // Fixed rgba for glow
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.6rem",
    fontSize: "0.95rem",
    opacity: 0.85,
    fontWeight: "500",
    color: "var(--text-color)",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, var(--background-start) 0%, var(--background-mid) 50%, var(--background-end) 100%)",
        color: "var(--text-color)",
        padding: "4rem 1rem",
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
          width: "100%",
          margin: "0 auto",
          padding: "2.5rem 3rem",
          background: "var(--form-card-background)",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--form-card-border)",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.25)", // Fixed rgba for shadow
        }}
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
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              fontWeight: "700",
              marginBottom: "0.75rem",
              background:
                "linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--tertiary-color))",
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
              padding: "16px 22px",
              borderRadius: "10px",
              border: "none",
              background: submissionStatus.isSubmitting
                ? "rgba(100, 116, 139, 0.8)" // Fixed rgba for disabled state
                : "var(--button-background)",
              color: "var(--text-color)",
              fontSize: "1.15rem",
              fontWeight: "600",
              cursor: submissionStatus.isSubmitting ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)", // Fixed rgba for shadow
            }}
            whileHover={{
              scale: submissionStatus.isSubmitting ? 1 : 1.03,
              boxShadow: submissionStatus.isSubmitting
                ? "0 5px 15px rgba(0, 0, 0, 0.15)"
                : "var(--button-hover-shadow)",
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
                  ? "var(--error-background)"
                  : "var(--success-background)",
                color: submissionStatus.isError
                  ? "var(--error-text)"
                  : "var(--success-text)",
                border: `1px solid ${
                  submissionStatus.isError
                    ? "var(--error-border)"
                    : "var(--success-border)"
                }`,
              }}
            >
              {submissionStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>

      <style jsx>{`
        /* Keyframes are global, so no need to redefine if already in index.css */
        /* Autofill and placeholder styles are now global in index.css */
      `}</style>
    </div>
  );
}
