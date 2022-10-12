import React from "react";
import s from "./Proyectos.module.css";
import nublado from "../../img/nublado.png";
import pokebola from "../../img/pokebola.png";

export default function Proyectos() {
  return (
    <div className={s.content} id="proyectos">
      <div className={s.contentImg}>
        <h2>Proyectos:</h2>
        <a href="https://pokemon-app-kevin170703.vercel.app/" target="_blank">
          <div className={s.proyectos}>
            <div className={s.logo}>
              <img src={pokebola} alt="" />
              <h5>App pokemons</h5>
            </div>
            <p>
              Tecnologias utilizadas:
              <br />
              <br /> React
              <br />
              Redux
              <br /> Sequelize
              <br /> Node.js
              <br /> JavaScript
              <br /> HTML
              <br /> CSS
            </p>
          </div>
        </a>
        <a href="https://app-clima-correa-kevin.netlify.app/" target="_blank">
          <div className={s.proyectos}>
            <div className={s.logo}>
              <img src={nublado} alt="" />
              <h5>App clima</h5>
            </div>
            <p>
              {" "}
              Tecnologias utilizadas:
              <br />
              <br /> React
              <br /> JavaScript
              <br /> HTML
              <br /> CSS
            </p>
          </div>
        </a>
      </div>
      <div></div>
    </div>
  );
}
