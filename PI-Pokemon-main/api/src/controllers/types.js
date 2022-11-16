const { Tipo } = require("../db");
const axios = require("axios");

// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

const typesPokemon = async () => {
    let pokemonsApi = await axios.get('https://pokeapi.co/api/v2/type')  //1154
    let data = pokemonsApi.data.results
    let arrayData = []
    data.filter((p) => arrayData.push(p.name));

    arrayData.forEach(el => {
        Tipo.findOrCreate({
            where: { name: el }
        })
    });

    const tipos = await Tipo.findAll();
    return tipos
}

module.exports = {typesPokemon}