import React from "react";
import Styles from './Footer.module.css'

export function Footer (){
    return (
        <footer className={Styles.footer}>
            <p className={Styles.p}>Made with ♥ for <a className={Styles.a} href="https://www.linkedin.com/in/ariel-cazzulino-hartvig/" target='_blank' rel="noopener noreferrer">Ariel</a></p>
        </footer>
    )
}

export default Footer