import React from "react";
import Styles from './Card.module.css'

export function Card({name, image, types}){

    let typeRet = types.length > 1 ? `${types[0]} - ${types[1]}` : types

    return(
        <div className={Styles.cardContainer}>
            <div className={Styles.imgContainer}>
                <img src={image} alt='Pokemon IMG not found' className={Styles.img}/>
            </div>
            <div className={Styles.infoContainer}>
                <h3 className={Styles.h3}>{name}</h3>
                <p className={Styles.p}>{typeRet}</p>
            </div>
        </div>
    )
}
 


export default Card;