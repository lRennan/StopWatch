// index.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Alterado para 'react-dom/client'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Alterado para createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
