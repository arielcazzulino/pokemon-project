import { GET_POKEMONS, FILTER_TYPE, GET_POKEMON_TYPE, FILTER_CREATED, FILTER_NAME, FILTER_ATTACK, GET_POKEMON_NAME, POST_POKEMONS } from '../Actions/actionsType'

const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
}

export function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        
        case GET_POKEMON_TYPE:
            return{
                ...state,
                types: action.payload
            }
            
        case GET_POKEMON_NAME:
            return{
                ...state,
                pokemons: action.payload
            }    
        
        case POST_POKEMONS:
            return{
              ...state
            }
        
        //filters

        case FILTER_TYPE:
            const allPokemons = state.allPokemons;
            let filterType = action.payload === 'All' ? allPokemons : 
                allPokemons.filter(el => { 
                    let type = el.types ? el.types.map(t => t.name) : el.tipos.map(t => t.name) // [poison, bug]
                    if(type.length === 1) return type[0] === action.payload 
                    if(type.length > 1) return type[0] === action.payload || type[1] === action.payload  
                })
                
            return{
                ...state,
                pokemons: filterType
            }

        case FILTER_CREATED:
            let allPokemons2 = state.allPokemons;
            let filterCreated = action.payload === 'created' ? 
                                allPokemons2.filter(el => el.dbCreated) : 
                                allPokemons2.filter(el => !el.dbCreated) 
            const returnPokes = action.payload === 'all' ? allPokemons2 : filterCreated

            return{
                ...state,
                pokemons: returnPokes
            }
        
        case FILTER_NAME:
            let allPokemons3 = state.allPokemons;
            let sorted = action.payload === 'A-Z' ?
            allPokemons3.sort(function(a, b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0}) :
              allPokemons3.sort(function(a, b){
                if(a.name < b.name) return 1;
                if(b.name < a.name) return -1;
                return 0})
            
            return {
                ...state,
                pokemons: sorted
            }
        
        case FILTER_ATTACK: 
            let allPokemons4 = state.allPokemons;
            let sortedAttack = action.payload === "asc" ?
            allPokemons4.sort(function(a, b){
                    if(a.attack > b.attack) return 1;
                    if(b.attack > a.attack) return -1;
                    return 0}) :
                allPokemons4.sort(function(a, b){
                    if(a.attack < b.attack) return 1;
                    if(b.attack < a.attack) return -1;
                    return 0})
            let verification = action.payload === 'default' ? allPokemons4 : sortedAttack
        return{
            ...state,
            pokemons: verification
        }
            
        default: 
        return {
          ...state
        }  
        
    } //switch
} //function

export default rootReducer;