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
        image: image ? image : 'https://elvortex.com/wp-content/uploads/2018/03/HddtBOT-e1520478229723.png',
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