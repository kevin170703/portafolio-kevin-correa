import React from "react";
import s from "./Home.module.css";
import profile from "../../img/profile.png";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className={s.home} id="home">
      <div className={s.person}>
        <div className={s.profile}>
          <img src={profile} alt="foto-de-perfil" />
        </div>
        <div className={s.info}>
          <h1>Kevin Correa</h1>
          <br />
          <h2>FullStack Developer</h2>
          <div className={s.contentIcons}>
            <a
              href="https://www.linkedin.com/in/kevin-correa-dev/"
              target="_BLANK"
            >
              <FaLinkedin size="40" className={s.icons} />
            </a>
            <a
              href="mailto:correakevinfabian01@gmail.com"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              <MdEmail size="50" className={s.icons} />
            </a>
            <a
              href="https://wa.me/+543754506364"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size="40" className={s.icons} />
            </a>
          </div>
          <a
            href="mailto:correakevinfabian01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={s.contactame}>Contactame</button>
          </a>
        </div>
      </div>
    </div>
  );
}
