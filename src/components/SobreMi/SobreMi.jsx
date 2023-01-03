import React from "react";
import s from "./SobreMi.module.css";

import { DiJavascript1, DiReact, DiCss3, DiNodejsSmall } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiSequelize, SiRedux } from "react-icons/si";

export default function SobreMi() {
  return (
    <div className={s.content} id="sobremi">
      <div className={s.sobreMi}>
        <h2>{"<Sobre mi/>"}</h2>
        <p>
          👋Me presento, mi nombre es Kevin, un apasionado de la tecnología, me
          considero una persona responsable, de rápido aprendizaje, atenta,
          dispuesta a escuchar y aprender de los demás. <br />
          💻Me adentré en este mundo ya que desde una temprana edad siempre me a
          gustado, ya que vos mismo podes resolver problemas gracias a tus
          conocimientos y, por lo tanto, ayudar a otros con las resolución que
          realizaste.
        </p>
        <button>
          <a href="https://drive.google.com/uc?export=download&id=1bit5wO_hdHZVHx4oFF3wt9C0IEJqH-fw">
            Descargar curriculum
          </a>
        </button>
      </div>
      <div className={s.logos}>
        <h2>Tecnologias que manejo</h2>
        <div className={s.contentLogos}>
          <AiFillHtml5 size="100" className={s.imagenes} />
          <p>HTML</p>
        </div>
        <div className={s.contentLogos}>
          <DiJavascript1 size="100" className={s.imagenes} />
          <p>JavaSript</p>
        </div>
        <div className={s.contentLogos}>
          <DiCss3 size="100" className={s.imagenes} />
          <p>CSS</p>
        </div>
        <div className={s.contentLogos}>
          <DiReact size="100" className={s.imagenes} />
          <p>React</p>
        </div>
        <div className={s.contentLogos}>
          <SiRedux size="100" className={s.imagenes} />
          <p>Redux</p>
        </div>
        <div className={s.contentLogos}>
          <DiNodejsSmall size="100" className={s.imagenes} />
          <p>Node.js</p>
        </div>
        <div className={s.contentLogos}>
          <SiSequelize size="100" className={s.imagenes} />
          <p>Sequelize</p>
        </div>
      </div>
    </div>
  );
}
