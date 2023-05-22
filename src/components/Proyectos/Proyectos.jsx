import React from "react";
import s from "./Proyectos.module.css";
import { useState, useRef } from "react";
import fondoServices from "../../img/services.png";
import fondoPokemons from "../../img/pokemons.png";
import fondoClima from "../../img/clima.png";
import fondoVelvet from "../../img/velvet.png";
import { useEffect } from "react";
// icons
import { DiJavascript1, DiReact, DiCss3, DiNodejsSmall } from "react-icons/di";
import { GrFormNext } from "react-icons/gr";
import {
  SiSequelize,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export default function Proyectos() {
  return (
    <div className={s.content} id="proyectos">
      <div className={s.contentProjects}>
        <h2 className={s.title}>Proyectos:</h2>
        <div className={s.project}>
          <a href="https://services-jobs.vercel.app" target="_blank">
            <img src={fondoServices} alt="" />
          </a>

          <div className={s.info}>
            <h5 className={s.title_project}>App services</h5>
            <p className={s.infoSite}>
              Una una página web donde pueden encontrar y publicar servicios de
              forma rapida y sencilla.
            </p>
            <div className={s.contentIcons}>
              <div className={s.contentLogos}>
                <DiJavascript1
                  size="30"
                  className={s.imagenes}
                  color="#ead41c"
                />
                <p>JavaSript</p>
              </div>

              <div className={s.contentLogos}>
                <DiReact size="30" className={s.imagenes} color="#5ccfee" />
                <p>React</p>
              </div>
              <div className={s.contentLogos}>
                <SiRedux size="30" className={s.imagenes} color="#7046b2" />
                <p>Redux</p>
              </div>
              <div className={s.contentLogos}>
                <DiNodejsSmall
                  size="30"
                  className={s.imagenes}
                  color="#7cc327"
                />
                <p>Node.js</p>
              </div>
              <div className={s.contentLogos}>
                <SiPostgresql
                  size="30"
                  className={s.imagenes}
                  color="#03a6e3"
                />
                <p>PostgreSQL</p>
              </div>
              <div className={s.contentLogos}>
                <SiSequelize size="30" className={s.imagenes} color="#03a6e3" />
                <p>Sequelize</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.projectTwo}>
          <a href="https://velvetpf.vercel.app/" target="_blank">
            <img src={fondoVelvet} alt="" />
          </a>

          <div className={s.info}>
            <h5 className={s.title_project}>Velvet ecommerce</h5>
            <p className={s.infoSite}>
              Un ecommerce donde pudes encontrat tus prendas favoritas.
            </p>
            <div className={s.contentIcons}>
              <div className={s.contentLogos}>
                <DiJavascript1
                  size="30"
                  className={s.imagenes}
                  color="#ead41c"
                />
                <p>JavaSript</p>
              </div>

              <div className={s.contentLogos}>
                <DiReact size="30" className={s.imagenes} color="#5ccfee" />
                <p>React</p>
              </div>
              <div className={s.contentLogos}>
                <SiRedux size="30" className={s.imagenes} color="#7046b2" />
                <p>Redux</p>
              </div>
              <div className={s.contentLogos}>
                <DiNodejsSmall
                  size="30"
                  className={s.imagenes}
                  color="#7cc327"
                />
                <p>Node.js</p>
              </div>
              <div className={s.contentLogos}>
                <SiSequelize size="30" className={s.imagenes} color="#03a6e3" />
                <p>Sequelize</p>
              </div>
              <div className={s.contentLogos}>
                <SiTailwindcss
                  size="30"
                  className={s.imagenes}
                  color="#07adca"
                />
                <p>Tailwindcss</p>
              </div>
              <div className={s.contentLogos}>
                <GrFormNext size="30" className={s.imagenes} color="#07adca" />
              </div>
            </div>
          </div>
        </div>

        <div className={s.project}>
          <a href="https://pokemon-app-kevin170703.vercel.app/" target="_blank">
            <img src={fondoPokemons} alt="" />
          </a>
          <div className={s.info}>
            <h5 className={s.title_project}>App pokemons</h5>
            <p className={s.infoSite}>
              Un pagina donde podras ver, crear y buscar tus pokemones
              favotitos.
            </p>
            <div className={s.contentIcons}>
              <div className={s.contentLogos}>
                <DiJavascript1
                  size="30"
                  className={s.imagenes}
                  color="#ead41c"
                />
                <p>JavaSript</p>
              </div>
              <div className={s.contentLogos}>
                <DiReact size="30" className={s.imagenes} color="#5ccfee" />
                <p>React</p>
              </div>
              <div className={s.contentLogos}>
                <SiRedux size="30" className={s.imagenes} color="#7046b2" />
                <p>Redux</p>
              </div>
              <div className={s.contentLogos}>
                <DiNodejsSmall
                  size="30"
                  className={s.imagenes}
                  color="#7cc327"
                />
                <p>Node.js</p>
              </div>
              <div className={s.contentLogos}>
                <SiPostgresql
                  size="30"
                  className={s.imagenes}
                  color="#03a6e3"
                />
                <p>PostgreSQL</p>
              </div>
              <div className={s.contentLogos}>
                <SiSequelize size="30" className={s.imagenes} color="#03a6e3" />
                <p>Sequelize</p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.projectTwo}>
          <a href="https://app-clima-correa-kevin.netlify.app/" target="_blank">
            <img src={fondoClima} alt="" />
          </a>
          <div className={s.info}>
            <h5 className={s.title_project}>App clima</h5>
            <p className={s.infoSite}>
              Un lugar donde podras ver el cima de cuidades y paises.
            </p>

            <div className={s.contentIcons}>
              <div className={s.contentLogos}>
                <DiJavascript1
                  size="30"
                  className={s.imagenes}
                  color="#ead41c"
                />
                <p>JavaSript</p>
              </div>

              <div className={s.contentLogos}>
                <DiReact size="30" className={s.imagenes} color="#5ccfee" />
                <p>React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
