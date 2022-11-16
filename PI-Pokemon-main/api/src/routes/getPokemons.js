const router = require('express').Router();
const {listPokemons} = require('../controllers/listPokemons')

router.get('/', async (req, res)=>{
    
    const { name } = req.query; 
    const allPokemons = await listPokemons();

    if(name){  //si hay un nombre que me pasan por query...
        const pokeName = await allPokemons.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
        pokeName.length ? 
        res.status(200).send(pokeName): 
        res.status(404).send("No se ha encontrado el pokemon");
    } else { //sino mando todos.
        res.status(200).send(allPokemons);
    }
}) 

module.exports = router 