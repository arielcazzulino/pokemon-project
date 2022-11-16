const router = require('express').Router();
const {typesPokemon} = require('../controllers/types')


router.get('/', async (req, res)=>{

    let allTypes = await typesPokemon();

    allTypes.length ?
    res.status(200).send(allTypes) :
    res.status(404).send("No se han podido cargar los tipos");
})


module.exports = router 