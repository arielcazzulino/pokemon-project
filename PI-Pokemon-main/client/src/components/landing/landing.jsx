import React from "react";
import { Link } from "react-router-dom";
import Styles from './landing.module.css'

export function Landing() {
    return (
      <div className={Styles.canvas}>
        
          <h1 className={Styles.h1}> Welcome to Pokemon project!</h1>
          <Link to="/home">
              <button className={Styles.button}>GO HOME</button>
          </Link>
        
      </div>
      
    );
  }
  
  export default Landing;
  