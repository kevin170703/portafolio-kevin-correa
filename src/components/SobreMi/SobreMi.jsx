import React from "react";
import s from "./SobreMi.module.css";
import { DiJavascript1, DiReact, DiCss3, DiNodejsSmall } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiSequelize,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useState, useRef } from "react";
import { useEffect } from "react";

export default function SobreMi() {
  const [show, setShow] = useState(false);
  const elemento = useRef();

  useEffect(() => {
    function handelView() {
      const { y } = elemento.current.getBoundingClientRect();
      const res = y <= 400 ? true : false;
      setShow(res);
    }
    window.addEventListener("scroll", handelView);
  }, []);

  return (
    <div className={s.content} id="sobremi" ref={elemento}>
      <div className={show === false ? s.contentNo : s.sobreMi}>
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
          <a href="https://drive.google.com/uc?export=download&id=1okbHy3U8rWkfG5ApfbLmiF__9hpsGyX5">
            Descargar curriculum
          </a>
        </button>
      </div>
      <div className={show === false ? s.contentNo : s.logos}>
        <h2>Tecnologias</h2>
        <div className={s.contentLogos}>
          <AiFillHtml5 size="100" className={s.imagenes} color="#f25320" />
          <p>HTML</p>
        </div>
        <div className={s.contentLogos}>
          <DiCss3 size="100" className={s.imagenes} color="#00a7e0" />
          <p>CSS</p>
        </div>
        <div className={s.contentLogos}>
          <DiJavascript1 size="100" className={s.imagenes} color="#ead41c" />
          <p>JavaSript</p>
        </div>
        <div className={s.contentLogos}>
          <SiTypescript size="90" className={s.imagenes} color="#0174c1" />
          <p>Typescript</p>
        </div>
        <div className={s.contentLogos}>
          <DiReact size="100" className={s.imagenes} color="#5ccfee" />
          <p>React</p>
        </div>
        <div className={s.contentLogos}>
          <SiRedux size="100" className={s.imagenes} color="#7046b2" />
          <p>Redux</p>
        </div>
        <div className={s.contentLogos}>
          <DiNodejsSmall size="100" className={s.imagenes} color="#7cc327" />
          <p>Node.js</p>
        </div>
        <div className={s.contentLogos}>
          <SiSequelize size="100" className={s.imagenes} color="#03a6e3" />
          <p>Sequelize</p>
        </div>
        <div className={s.contentLogos}>
          <SiTailwindcss size="90" className={s.imagenes} color="#07adca" />
          <p>Tailwindcss</p>
        </div>
      </div>
    </div>
  );
}
