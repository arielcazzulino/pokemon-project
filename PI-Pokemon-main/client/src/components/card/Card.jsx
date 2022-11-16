import React from "react";
import Styles from './Card.module.css'

export function Card({name, image, types}){

    let typeRet = types.length > 1 ? `${types[0]} - ${types[1]}` : types

    return(
        <div className={Styles.cardContainer}>
            <div className={Styles.imgContainer}>
                <img src={image} alt='Pokemon IMG not found' className={Styles.img}/>
            </div>
                <h3>{name}</h3>
                <p>{typeRet}</p>
        </div>
    )
}
 


export default Card;