const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoutes = require('./getPokemons');
const pokemonIdRoutes = require('./getPokemonsID')
const pokemonPost = require('./postPokemon')
const types = require('./getTypes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRoutes, pokemonIdRoutes, pokemonPost);
router.use('/types', types); 


module.exports = router;
