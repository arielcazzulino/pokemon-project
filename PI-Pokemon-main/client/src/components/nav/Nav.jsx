import React from 'react';
import logo from '../img/pokeLogo.png'
import Styles from './Nav.module.css'
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

export function NavBar (){
    return(
        <div className={Styles.navContainer}>
            <div className={Styles.logo_tittle}>
                <Link to='/home'>    
                    <img src={logo} alt="Logo de Doggypedia" className={Styles.img}/>        
                </Link>
            </div>
            
            <SearchBar/>
        
            <Link to='/pokemons'> 
                <button className={Styles.button}>Create your Pokémon</button>
            </Link>

        </div>
    )
}

export default NavBar