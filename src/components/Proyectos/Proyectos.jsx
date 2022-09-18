import React from "react";
import s from "./Proyectos.module.css";
import appClima from "../../img/appClima.png";

export default function Proyectos() {
  return (
    <div className={s.content} id="proyectos">
      <div className={s.contentImg}>
        <div>
          <p>App clima</p>
          <a href="https://app-clima-correa-kevin.netlify.app/" target="_blank">
            <img src={appClima} alt="appClima" className={s.appClima} />
          </a>
        </div>
      </div>
      <h2>Proyectos</h2>
    </div>
  );
}
