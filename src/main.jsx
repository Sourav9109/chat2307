import { StrictMode } from "react";
import dbapp from "./FirebaseConfigaration/FirebaseDbconfig.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
