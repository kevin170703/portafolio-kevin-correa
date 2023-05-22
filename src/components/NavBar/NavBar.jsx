import React from "react";
import s from "./NavBar.module.css";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div className={s.nav}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={s.links}
      >
        Inicio
      </Link>
      <Link
        activeClass="active"
        to="sobremi"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={s.links}
      >
        Sobre mi
      </Link>
      <Link
        activeClass="active"
        to="proyectos"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={s.links}
      >
        Proyectos
      </Link>
      <Link
        activeClass="active"
        to="experiencie"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
        className={s.links}
      >
        Experiencia
      </Link>
      <a
        href="mailto:correakevinfabian01@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        className={s.links}
      >
        Contactame
      </a>
    </div>
  );
}
