import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px", color: "white" }}>
        About
      </Link>
      <Link to="/projects" style={{ marginRight: "10px", color: "white" }}>
        Projects
      </Link>
      <Link to="/contact" style={{ color: "white" }}>
        Contact
      </Link>
    </nav>
  );
}
