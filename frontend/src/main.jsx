import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
