import React from "react";
import style from "./Experiencie.module.css";
import {
  SiSequelize,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiExpress,
  SiFigma,
} from "react-icons/si";

export default function Experiencie() {
  return (
    <div className={style.contentAll} id="experiencie">
      <h2>Experiencia</h2>

      <div className={style.contentIcons}>
        <div className={style.contentIcon}>
          <SiHtml5 size="90" className={style.icon} color="#f25320" />
          <p>HTML</p>
        </div>
        <div className={style.contentIcon}>
          <SiCss3 size="90" className={style.icon} color="#00a7e0" />
          <p>CSS</p>
        </div>
        <div className={style.contentIcon}>
          <SiJavascript size="90" className={style.icon} color="#ead41c" />
          <p>JavaSript</p>
        </div>
        <div className={style.contentIcon}>
          <SiTypescript size="90" className={style.icon} color="#0174c1" />
          <p>Typescript</p>
        </div>
        <div className={style.contentIcon}>
          <SiReact size="100" className={style.icon} color="#5ccfee" />
          <p>React</p>
        </div>
        <div className={style.contentIcon}>
          <SiRedux size="100" className={style.icon} color="#7046b2" />
          <p>Redux</p>
        </div>
        <div className={style.contentIcon}>
          <SiNodedotjs size="100" className={style.icon} color="#7cc327" />
          <p>Node.js</p>
        </div>
        <div className={style.contentIcon}>
          <SiExpress size="100" className={style.icon} color="#fff" />
          <p>Express</p>
        </div>
        <div className={style.contentIcon}>
          <SiPostgresql size="100" className={style.icon} color="#03a6e3" />
          <p>PostgreSQL</p>
        </div>
        <div className={style.contentIcon}>
          <SiSequelize size="100" className={style.icon} color="#03a6e3" />
          <p>Sequelize</p>
        </div>
        <div className={style.contentIcon}>
          <SiTailwindcss size="90" className={style.icon} color="#07adca" />
          <p>Tailwindcss</p>
        </div>
        <div className={style.contentIcon}>
          <SiFigma size="90" className={style.icon} color="#F24E1E" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}
