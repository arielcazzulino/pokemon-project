import React from "react";
import { Link } from "react-router-dom";
import Styles from './landing.module.css'
import gif from '../img/chariGif.gif'

export function Landing() {
    return (
      <div className={Styles.canvas}>
          <img src={gif} alt="charizard" className={Styles.img}/>
          <div className={Styles.textAndBtn}>
            <h1 className={Styles.h1}> Gotta catch em all!</h1>
            <Link to="/home">
                <button className={Styles.button}>GO HOME</button>
            </Link>
        </div>
      </div>
      
    );
  }
  
  export default Landing;
  