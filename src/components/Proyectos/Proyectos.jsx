import React from "react";
import s from "./Proyectos.module.css";
import { useState, useRef } from "react";
import { GrShop } from "react-icons/gr";
import { TbPokeball } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdWorkOutline } from "react-icons/md";
import fondoServices from "../../img/services.png";
import fondoPokemons from "../../img/pokemons.png";
import fondoClima from "../../img/clima.png";
import fondoVelvet from "../../img/velvet.png";
import { useEffect } from "react";

export default function Proyectos() {
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
    <div className={s.content} id="proyectos" ref={elemento}>
      <div className={s.contentImg}>
        <h2 className={s.title}>Proyectos:</h2>
        <a href="https://services-jobs.vercel.app" target="_blank">
          <div className={show === false ? s.contentNo : s.proyectos}>
            <img src={fondoServices} alt="" />

            {/* <div className={s.logo}>
              <MdWorkOutline size="50" className={s.logos} />
            </div> */}
            <div className={s.info}>
              <h5 className={s.title_proyectos}>App services</h5>
              <p>
                Una una página donde pueden encontrar y publicar servicios de
                forma rapida y sencilla.
              </p>
              <p>
                Tecnologias utilizadas:
                <br />
                <br /> React, Redux
                <br /> Node.js, Express
                <br /> PostgresSQL, Sequelize
                <br /> JavaScript, HTML, CSS
              </p>
            </div>
          </div>
        </a>
        <a href="https://velvetpf.vercel.app/" target="_blank">
          <div className={show === false ? s.contentNo : s.proyectos}>
            <img src={fondoVelvet} alt="" />
            {/* <div className={s.logo}>
              <GrShop size="50" className={s.logos} />
            </div> */}
            <div className={s.info}>
              <h5 className={s.title_proyectos}>Velvet ecommerce</h5>
              <p>Un ecommerce donde pudes encontrat tus prendas favoritas.</p>
              <p>
                Tecnologias utilizadas:
                <br />
                <br /> React, Redux, Tailwindcss
                <br /> Node.js, Express
                <br /> PostgresSQL, Sequelize
                <br /> JavaScript, HTML, CSS
              </p>
            </div>
          </div>
        </a>
        <a href="https://pokemon-app-kevin170703.vercel.app/" target="_blank">
          <div className={show === false ? s.contentNo : s.proyectos}>
            <img src={fondoPokemons} alt="" />

            {/* <div className={s.logo}>
              <TbPokeball size="70" className={s.logos} />
            </div> */}
            <div className={s.info}>
              <h5 className={s.title_proyectos}>App pokemons</h5>
              <p>
                Un pagina donde podras ver, crear y buscar tus pokemones
                favotitos.
              </p>
              <p>
                Tecnologias utilizadas:
                <br />
                <br /> React, Redux
                <br /> Node.js, Express
                <br /> PostgresSQL, Sequelize
                <br /> JavaScript, HTML, CSS
              </p>
            </div>
          </div>
        </a>
        <a href="https://app-clima-correa-kevin.netlify.app/" target="_blank">
          <div className={show === false ? s.contentNo : s.proyectos}>
            <img src={fondoClima} alt="" />

            {/* <div className={s.logo}>
              <TiWeatherPartlySunny size="50" className={s.logos} />
            </div> */}
            <div className={s.info}>
              <h5 className={s.title_proyectos}>App clima</h5>
              <p>Un lugar donde podras ver el cima de cuidades y paises.</p>

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
          </div>
        </a>
      </div>
      <div></div>
    </div>
  );
}
