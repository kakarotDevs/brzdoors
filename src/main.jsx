import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      {/* Use HashRouter instead of BrowserRouter */}
      <App />
    </HashRouter>
  </StrictMode>,
);
