import React from "react";
import s from "./Contactos.module.css";

export default function Contactos() {
  return (
    <div className={s.content} id="contactos">
      <a
        href="https://www.linkedin.com/in/kevin-correa-dev/"
        target="_BLANK"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-linkedin bx-lg"></i>
      </a>
      <a
        href="https://wa.me/+543754506364"
        target="_BLANK"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-whatsapp  bx-lg"></i>
      </a>

      <i className="bx bx-envelope bx-lg"></i>
      <p>correakevinfabian01@gmail.com</p>
    </div>
  );
}
