import React from "react";
import img404 from '../img/404.png'
import Style from './error.module.css'

export function Error404 (){
    
    return (
        <div className={Style.allErrorContain}>
            <div className={Style.tittleAndP}>
                <h1 className={Style.h1}>404</h1>
                <p className={Style.p}>No pokémon of the selected type was found</p>
            </div>
            <img src={img404} className={Style.img} alt="Pokémon not found" />
        </div>       
    )
}

export default Error404;