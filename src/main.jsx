import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import OrienteApp from "./OrienteApp.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OrienteApp />
    </BrowserRouter>
  </StrictMode>
);
