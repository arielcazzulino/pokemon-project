import React from "react";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { getPokemons, getPokemonDetail, deletePokemon } from "../../redux/Actions";
import {Loading} from '../loading/Loading'
import {NavBar} from '../nav/Nav'
import { useHistory } from 'react-router-dom';
import Styles from './Details.module.css'
import trash from '../img/trashIcon.png' 

export function Details (){
    const dispatch = useDispatch()
    const pokemonDetail = useSelector(state => state.detail)
    console.log(pokemonDetail)

    let { id } = useParams();
    const history = useHistory();

    /* let pokeId = pokemonDetail.length !== 0 ? pokemonDetail[0].id : '' */

    useEffect(()=> {
        dispatch(getPokemonDetail(id));
    }, [dispatch, id])


    let typeOrTipo = ''; // me ayuda a renderizar los tipos dentro del componente

    const handleDelete = (id) =>{
        console.log(id)
        dispatch(deletePokemon(id)) 
        dispatch (getPokemons());
        history.push('/home') 
    }  

    return(
        <>
            <NavBar/>
            {
                pokemonDetail.length !== 0 ? 
                <div className={Styles.main}>
                    <div className={Styles.card}>    
                        <div className={Styles.imgID}>
                            <img src={pokemonDetail[0].image} alt="Pokémon img" className={Styles.img}/> 
                            <p>ID: {pokemonDetail[0].id}</p> </div>
                        <div className={Styles.data}>    
                            <div>
                                <h1 className={Styles.h1}>{pokemonDetail[0].name}</h1>
                                <p className={Styles.ignore}>{typeOrTipo = pokemonDetail[0].types ? pokemonDetail[0].types.map(el => el.name) : pokemonDetail[0].tipos.map(el=>el.name)}</p>
                                <p className={Styles.types}>{typeOrTipo.length > 1 ? `${typeOrTipo[0]} - ${typeOrTipo[1]}` : typeOrTipo}</p> 
                            </div>    
                            <div className={Styles.pointsContainer}>
                                <div className={Styles.div1}>
                                    <p><b>Health points:</b> {pokemonDetail[0].hp}</p>
                                    <p><b>Attack power:</b> {pokemonDetail[0].attack}</p>
                                    <p><b>Defense points:</b> {pokemonDetail[0].defense}</p>
                                </div>
                                <div>
                                    <p><b>Speed:</b> {pokemonDetail[0].speed}</p>
                                    <p><b>Height:</b> {pokemonDetail[0].height}</p>
                                    <p><b>Weight:</b> {pokemonDetail[0].weight}</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                    {pokemonDetail[0].dbCreated && 
                        <button className={Styles.buttonDelete} onClick={(e) => handleDelete(pokemonDetail[0].id)}>
                            <img src={trash} alt="Delete Icon" className={Styles.deleteIcon}/>
                            Delete Pokémon
                        </button>}
                </div>            
                : <Loading/>
            }
        </>
    )
}

export default Details