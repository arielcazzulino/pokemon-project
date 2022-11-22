import axios from 'axios';
import { GET_POKEMONS, FILTER_TYPE, GET_POKEMON_TYPE, FILTER_CREATED,FILTER_NAME, FILTER_ATTACK, GET_POKEMON_NAME, GET_POKEMON_DETAIL, CLEAN_DETAIL, ERROR_SEARCH_POKEMON, DELETE_POKEMON} from './actionsType'

export function getPokemons(){
    return async function(dispatch){
        let pokemons = await axios('http://localhost:3001/pokemons');
        
        return dispatch ({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
    }
}

export function getPokemonType(){
    return async function(dispatch){
        let types = await axios('http://localhost:3001/types')
        
        return dispatch({
            type: GET_POKEMON_TYPE,
            payload: types.data
        })
    }
}

export function getPokemonsName(payload){
    return async function (dispatch){
        try{
            let names = await axios(`http://localhost:3001/pokemons?name=${payload}`)
            return dispatch ({
                type: GET_POKEMON_NAME,
                payload: names.data
            })
        }
        catch(err){
            return dispatch({   //nuevo
                type: ERROR_SEARCH_POKEMON
            })
        }
    }
}

export function getPokemonDetail(payload){
    return async function (dispatch){
        let pokesDetail = await axios(`http://localhost:3001/pokemons/${payload}`)
        return dispatch ({
            type: GET_POKEMON_DETAIL,
            payload: pokesDetail.data
        })
    }
}

export function postPokemon(payload){
    return async function() {
      const post = await axios.post('http://localhost:3001/pokemons', payload)
      return post
    }
  } 

export function deletePokemon (payload){
    return async function (dispatch){
        
        await axios.delete(`http://localhost:3001/pokemons/${payload}`)
        
        return dispatch ({
            type: DELETE_POKEMON
        })
    }
}

//Filters
export function filterByType(payload){
    return {
        type: FILTER_TYPE,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function filterByName(payload){
    return{
        type: FILTER_NAME,
        payload
    }
}

export function filterByAttack(payload){
    return{
        type: FILTER_ATTACK,
        payload
    }
}

// reset

export function cleanDetail(){
    return{
        type: CLEAN_DETAIL,
    }
}