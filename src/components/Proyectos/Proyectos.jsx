import React from "react";
import s from "./Proyectos.module.css";
import appClima from "../../img/appClima.png";
import pokeapp from "../../img/pokeapp.png";

export default function Proyectos() {
  return (
    <div className={s.content} id="proyectos">
      <div className={s.contentImg}>
        <div>
          <p>App clima</p>
          <a href="https://app-clima-correa-kevin.netlify.app/" target="_blank">
            <img src={appClima} alt="appClima" className={s.app} />
          </a>
          <p>App pokemons</p>
          <a href="https://pokemon-app-kevin170703.vercel.app/" target="_blank">
            <img src={pokeapp} alt="pokeapp" className={s.app} />
          </a>
        </div>
      </div>
      <h2>Proyectos</h2>
    </div>
  );
}
