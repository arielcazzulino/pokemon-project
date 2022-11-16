const router = require('express').Router();
const { Pokemon, Tipo } = require("../db");

router.post('/', async (req, res)=>{

    let {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
        image,
        dbCreated
    } = req.body

    let pokeCreate = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image: image ? image : 'https://www.pokemoncenter.com/static/images/no-image.jpg',
        dbCreated
       })

    let associatedType = await Tipo.findAll({
        where: { name: types},
    })
    
    pokeCreate.addTipo(associatedType); 
    console.log(pokeCreate)
    res.status(200).send(pokeCreate)
    
})

module.exports = router 