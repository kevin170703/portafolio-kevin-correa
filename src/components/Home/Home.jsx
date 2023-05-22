import React from "react";
import s from "./Home.module.css";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className={s.home} id="home">
      <div className={s.info}>
        <h5>
          Hola<span>.</span>
        </h5>
        <h1>Mi nombre es Kevin Correa</h1>
        <br />
        <h2>FullStack Developer</h2>
        <div className={s.contentButtons}>
          <a
            href="mailto:correakevinfabian01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={s.contactMe}>Contactame</button>
          </a>

          <Link
            activeClass="active"
            to="sobremi"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={s.contactMe}
          >
            Sobre Mi
          </Link>
        </div>
      </div>
    </div>
  );
}
