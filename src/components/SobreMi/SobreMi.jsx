import React from "react";
import s from "./SobreMi.module.css";
import profile from "../../assets/perfil2.png";

export default function SobreMi() {
  return (
    <div className={s.content} id="sobremi">
      <img src={profile} alt="" />
      <div className={s.sobreMi}>
        <h2>Sobre mi</h2>
        <p>
          ¡Hola! Soy Kevin Correa, un desarrollador Full Stack apasionado por la
          tecnología.
          <br /> <br />
          Me considero una persona enfocada y con capacidad de aprendizaje
          rápido. Estoy dispuesto a adaptarme y siempre estoy ansioso por
          aprender.
          <br /> <br />
          Disfruto de la programación porque me permite resolver problemas y
          ayudar a otros con mis conocimientos.
          <br /> <br />
          Me adentré en este mundo desde una edad temprana debido a mi gran
          curiosidad por comprender cómo funcionan las cosas en su interior.
        </p>
        <button>
          <a href="https://drive.google.com/uc?export=download&id=1O8iFzyuUEjP3FT3eSqX85x9lhXlsUNnd">
            Descargar curriculum
          </a>
        </button>
      </div>
    </div>
  );
}
