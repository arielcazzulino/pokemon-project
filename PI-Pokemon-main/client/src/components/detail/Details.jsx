import React from "react";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../redux/Actions";
import {Loading} from '../loading/Loading'
import {NavBar} from '../nav/Nav'

export function Details (){
    const dispatch = useDispatch()
    const pokemonDetail = useSelector(state => state.detail)
    console.log(pokemonDetail)
    let { id } = useParams();

    useEffect(()=> {
        dispatch(getPokemonDetail(id))
    }, [dispatch, id])

 
    
    return(
        <>
            <NavBar/>
            {
                pokemonDetail.length !== 0 ? 
                <div>
                    <div><img src={pokemonDetail[0].image} alt="Pokémon img" /></div>
                    <h1>{pokemonDetail[0].name}</h1>
                    <p>Types: {pokemonDetail[0].types ? pokemonDetail[0].types.map(el=> el.name) : pokemonDetail[0].tipos.map(el=>el.name)}</p> 
                    <p>Pokemon ID: {pokemonDetail[0].id}</p>
                    <p>Health points: {pokemonDetail[0].hp}</p>
                    <p>Attack power:{pokemonDetail[0].attack}</p>
                    <p>Defense points:{pokemonDetail[0].defense}</p>
                    <p>Speed:{pokemonDetail[0].speed}</p>
                    <p>Height: {pokemonDetail[0].height}</p>
                    <p>Weight: {pokemonDetail[0].weight}</p>

                </div>            
                : <Loading/>
            }
        </>
    )
}

export default Details