const router = require('express').Router();
const { Pokemon } = require("../db");

router.delete('/:id', async (req, res)=>{
    let {id} = req.params;

    await Pokemon.destroy({
        where: {id : id}
    })
    
    res.status(200).json({msg:'Pokémon deleted succesfull'})
})

module.exports = router 