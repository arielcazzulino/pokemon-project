/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {getPokemons, getPokemonType, filterByType, filterCreated, filterByName, filterByAttack } from '../../redux/Actions/index';
import {Card} from '../card/Card'
import {NavBar} from '../nav/Nav'
import {Pagination} from '../paginate/Paginate'
import {Loading} from '../loading/Loading'
import Style from './Home.module.css'



export function Home (){

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons) //useSelector me trae todo lo que está en el initial state, en este caso, todo lo que está en pokemons
    const typesOfPokemon = useSelector(state => state.types)

    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getPokemonType());
    }, [dispatch])


    //local states
    let [currentPage, setCurrentPage] = useState(1);  
    let [pokemonsInPage, setPokemonsInPage] = useState(12)
    let [order, setOrder] = useState('')
    
    // Pagination
    let indexLastPoke = currentPage * pokemonsInPage // 1 * 12 = 12
    let indexFirstPoke = indexLastPoke - pokemonsInPage // 12 - 12 = 0
    let pokesInCurrentPage = allPokemons.slice(indexFirstPoke, indexLastPoke) // slice = [0, 1, (...), 11]
    
    const paginated = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    let prev = '<<<';
    let next = '>>>';
    
   
    // Handles
 
    const handlePrev = (e) =>{
        e.preventDefault();
        currentPage !== 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)
    }

    const handleNext = (e) =>{
        e.preventDefault();
        pokesInCurrentPage.length === 12 && setCurrentPage(currentPage + 1) 
    }

    const handleFilterTypes = (e) =>{
        e.preventDefault();
        dispatch(filterByType(e.target.value))
        setCurrentPage(1)
      }
    
    const handleFilterCreated = (e) => {
      e.preventDefault();
      dispatch(filterCreated(e.target.value))
      setCurrentPage(1)
    }

    const handleFilterName = (e) => {
        e.preventDefault();
        dispatch(filterByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    const handleFilterAttack = (e) => {
        e.preventDefault();
        dispatch(filterByAttack(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            <NavBar/>
            {/* filters section*/}
            
            <div className={Style.filterBar}>
                <div className={Style.filterSearch}>
                    <p>Filter by <b>alphabetical order:</b></p>
                        <select onChange={(e) => handleFilterName(e)} className={Style.filterSelects}>
                              <option value="A-Z">A-Z</option>
                              <option value="Z-A">Z-A</option>
                        </select>
                </div>
                
                <div className={Style.filterSearch}>
                    <p>Filter by <b>attack:</b></p>
                        <select onChange={(e) => handleFilterAttack(e)} className={Style.filterSelects}>
                          <option value="default">Attack </option>
                          <option value="desc">Highest </option>
                          <option value="asc">Lowest </option>
                        </select>
                </div>
                
                <div className={Style.filterSearch}>
                    <p>Filter by <b>type:</b></p>
                      <select onChange={(e) => handleFilterTypes(e)} className={Style.filterSelects}>
                        <option value='All'>All</option>
                        {
                          typesOfPokemon?.map(type => (
                            <option value={type.name} key={type.id}> {type.name} </option>
                            ))
                        }
                       </select> 
                </div>

                <div className={Style.filterSearch}>    
                    <p>Filter by <b>API or DB:</b></p>
                        <select onChange={ (e) => handleFilterCreated(e)} className={Style.filterSelects}> 
                          <option value="all">All</option>
                          <option value="api">API</option>
                          <option value="created">User Created</option>
                        </select>
                </div>
            </div>

            {/* loading, card && pagination */}
            
            { allPokemons.length === 0 ?
                <Loading/> :
            
                <div className={Style.cardArea}> 
                    <div className={Style.card}>
                        {
                            pokesInCurrentPage?.map(el => {
                                let pokeTypes = el.types ? el.types.map(el=> el.name) : el.tipos.map(el=>el.name)
                                return (<Card key={el.id} name={el.name} image={el.image} types={pokeTypes} />)
                            })  
                        }
                    </div>
                    
                    
                    <div className={Style.pagination}>
                        <button onClick={handlePrev} 
                        className={currentPage === 1 ? Style.offPaginationButton : Style.paginationButton}> {prev} </button>
                        <Pagination pokemonsInPage={pokemonsInPage} allPokemons={allPokemons.length} paginated={paginated} currentPage={currentPage}/>
                        <button onClick={handleNext}  
                        className={pokesInCurrentPage.length !== 12 ? Style.offPaginationButton : Style.paginationButton}> {next} </button>
                    </div>
                </div>
            }

        </div> 
    ) 
}

export default Home;