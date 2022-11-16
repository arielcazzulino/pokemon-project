import React from 'react';
import loading from '../img/Loading.gif' 
import Styles from './Loading.module.css'

export function Loading(){
    return(
        <div className={Styles.container}>
            <img src={loading} alt="cargando" className={Styles.img} />
            <p className={Styles.loading}>Loading...</p>
        </div>
    )
} 

export default Loading;