const { Pokemon, Tipo } = require("../db");
const axios = require("axios");

// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal

const listApiPokemons = async () => {
    let pokemonsApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')  //1154
    let data = pokemonsApi.data.results

    let arrayPromises = [];
    data.map((p) => arrayPromises.push(axios.get(p.url)));  // se obtiene uno por uno los datos de cada pokemon
    
    let arrayPokemonsApi = [];
    
    await Promise.all(arrayPromises)
    .then((pokemons) => {
        arrayPokemonsApi = pokemons.map((p) => {
            return {
                id: p.data.id,
                name: p.data.name,
                image: p.data.sprites.other.dream_world.front_default,  // url imagen
                hp: p.data.stats[0].base_stat,
                attack: p.data.stats[1].base_stat,
                defense: p.data.stats[2].base_stat,
                speed: p.data.stats[3].base_stat,
                height: p.data.height,
                weight: p.data.weight,
                types: p.data.types.map((t) => {
                    return {
                        name: t.type.name
                    }
                })
            };  
        }); 
    })
    
    return arrayPokemonsApi
    
}

const listDbPokemons = async () => {
    return await Pokemon.findAll({    //quiero que me traiga todos los poke y que además incluya el tipo
        include: {
            model: Tipo,     // y de este tipo, quiero que me traiga el nombre
            attributes: ['name'],   // le indico que me traiga el nombre
            through: { attributes: [] } // sobre la tabla de atributos - Es una comprobación que va siempre
        }
    })
}

const listPokemons = async () => {
    
    const apiPoke = await listApiPokemons();
    const dbPoke = await listDbPokemons();
    const allPokes = apiPoke.concat(dbPoke);
    return allPokes;
}

module.exports = {listPokemons}; 