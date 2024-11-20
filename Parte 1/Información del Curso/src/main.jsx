import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  /* StrictMode es una herramienta de desarrollo en React diseñada para ayudarte a identificar problemas 
  potenciales en tu aplicación. No renderiza ningún contenido visible en la interfaz, pero activa ciertas 
  comprobaciones y advertencias en el desarrollo. Estas son sus principales funcionalidades: */
  <StrictMode>
    <App />
  </StrictMode>
);
