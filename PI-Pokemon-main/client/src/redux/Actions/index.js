import axios from 'axios';
import { GET_POKEMONS, FILTER_TYPE, GET_POKEMON_TYPE, FILTER_CREATED,FILTER_NAME, FILTER_ATTACK, GET_POKEMON_NAME} from './actionsType'

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
            console.error(err)
        }
    }
}

export function postPokemon(payload){
    return async function() {
      const post = await axios.post('http://localhost:3001/pokemons', payload)
      return post
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

