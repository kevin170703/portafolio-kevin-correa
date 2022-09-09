import React from "react";
import s from "./Proyectos.module.css"

export default function Proyectos(){
    return(
        <div className={s.content} id="proyectos">
            
            <div className={s.contentImg}>
                <img src="https://www.iadsandevents.com/wp-content/uploads/2017/10/250x150.gif" alt="" />
                <img src="https://www.iadsandevents.com/wp-content/uploads/2017/10/250x150.gif" alt="" />
                <img src="https://www.iadsandevents.com/wp-content/uploads/2017/10/250x150.gif" alt="" />
            </div>
            <h2>Proyectos</h2>
        </div>
    )
}