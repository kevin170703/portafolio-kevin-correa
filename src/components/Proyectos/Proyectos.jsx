import React from "react";
import s from "./Proyectos.module.css";

import { GrShop } from "react-icons/gr";
import { TbPokeball } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";

export default function Proyectos() {
  return (
    <div className={s.content} id="proyectos">
      <div className={s.contentImg}>
        <h2 className={s.title}>Proyectos:</h2>
        <a href="https://velvetpf.vercel.app/" target="_blank">
          <div className={s.proyectos}>
            <div className={s.logo}>
              <GrShop size="40" className={s.logos} />
              <h5>Velvet ecommerce</h5>
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
              <br /> entre otras.
            </p>
          </div>
        </a>
        <a href="https://pokemon-app-kevin170703.vercel.app/" target="_blank">
          <div className={s.proyectos}>
            <div className={s.logo}>
              <TbPokeball size="50" className={s.logos} />
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
              <TiWeatherPartlySunny size="50" className={s.logos} />

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
        <a href="https://services-jobs.vercel.app" target="_blank">
          <div className={s.proyectos}>
            <div className={s.logo}>
              <MdWorkOutline size="50" className={s.logos} />
              <h5>App services</h5>
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
      </div>
      <div></div>
    </div>
  );
}
