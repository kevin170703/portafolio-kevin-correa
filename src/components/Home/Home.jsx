import React from "react";
import s from "./Home.module.css";
import profile from "../../img/profile.png";

export default function Home() {
  return (
    <div className={s.home} id="home">
      <div className={s.person}>
        <div className={s.profile}>
          <img src={profile} alt="foto-de-perfil" />
        </div>
        <div className={s.info}>
          <h1>Kevin Correa</h1>
          <br />
          <h2>FullStack Developer</h2>
        </div>
      </div>
    </div>
  );
}
