import React from 'react';
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { getPokemonsName } from '../../redux/Actions';
import lupa from '../img/lupa.png' 
import Styles from "./SearchBar.module.css"

export function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        !name.length && alert ('Enter a name in the search form') 
        dispatch(getPokemonsName(name));
        setName('')
    }

    return(
        <div className={Styles.container}>
            <input className={Styles.input} type="text" placeholder="Search Pokemon" onChange={e => handleInputChange(e)} />
            <button className={Styles.button} type="submit" onClick={e => handleSubmit(e)}> 
                <img src={lupa} alt="Search" className={Styles.lupa}/> 
                <p className={Styles.searchText}>Search</p> 
            </button>
        </div>
    )
}

export default SearchBar