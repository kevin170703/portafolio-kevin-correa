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
          persona responsable, Atenta, dispuesta a escuchar y aprender de los
          demas. Con muchas ganas de aprender nuevos recursos y mejorar en este
          mundo de la tecnologia.
        </p>
      </div>
      <div className={s.logos}>
        <img src={css} alt="css" />
        <img src={html} alt="html" />
        <img src={js} alt="js" />
        <h2>tecnologias que manejo</h2>
        <img src={react} alt="react" />
        <img src={redux} alt="redux" />
        <img src={node} alt="node.js" />
      </div>
    </div>
  );
}
