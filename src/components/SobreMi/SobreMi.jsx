import React from "react";
import s from "./SobreMi.module.css";
import css from "../../img/css.png";
import html from "../../img/html.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import node from "../../img/node.png";

export default function SobreMi() {
  return (
    <div className={s.content} id="sobremi">
      <div className={s.sobreMi}>
        <h2>Sobre mi</h2>
        <p>
          Mi nombre es Kevin Correa, FullStack developer, me considero una
          persona responsable, atenta, dispuesta a escuchar, aprender de los
          demas y con grandes habilidades para el trabajo en equipo.
        </p>
        <button>
          <a href="https://drive.google.com/uc?export=download&id=154vcHuvNCPN4zgWbQ3ePkFKj_1k0fgGG">
            Descargar curriculum
          </a>
        </button>
      </div>
      <div className={s.logos}>
        <img src={css} alt="css" />
        <img src={html} alt="html" />
        <img src={js} alt="js" />
        <h2>Tecnologias que manejo</h2>
        <img src={react} alt="react" />
        <img src={redux} alt="redux" />
        <img src={node} alt="node.js" />
      </div>
    </div>
  );
}
