import React from "react";
import s from "./Home.module.css";

export default function Home() {
  return (
    <div className={s.home} id="home">
      <div className={s.person}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="foto-de-perfil"
        />
        <div className={s.info}>
          <h1>Kevin Correa</h1>
          <br />
          <h2>FullStack Developer</h2>
        </div>
      </div>
    </div>
  );
}
