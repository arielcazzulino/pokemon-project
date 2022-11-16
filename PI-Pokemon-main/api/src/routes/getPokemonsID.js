const router = require('express').Router();
const {listPokemons} = require('../controllers/listPokemons')

router.get('/:id', async (req, res)=>{
    let {id} = req.params;
    const allPokemons = await listPokemons ();
    
    if(id){
        let pokeId = allPokemons.filter(el => el.id == id)
        console.log(`esto es pokeId al poner === ${pokeId}`)
        pokeId.length ?
        res.status(200).send(pokeId) :
        res.status(404).send('No existe ningun pokemon con ese id')
    } else {
        res.status(404).send('Ha ocurrido un error de busqueda')
    }
})

module.exports = router 