import { useState } from "react";
import { sendContactMessage } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [res, setRes] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sendContactMessage(form);
      setRes(result.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setRes("Error sending message. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />{" "}
      <br />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />{" "}
      <br />
      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        required
      ></textarea>{" "}
      <br />
      <button type="submit">Send</button>
      {res && <p>{res}</p>}
    </form>
  );
}
