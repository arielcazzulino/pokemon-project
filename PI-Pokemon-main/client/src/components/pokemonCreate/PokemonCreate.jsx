import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postPokemon, getPokemonType } from '../../redux/Actions';

export function PokemonCreate(){
    const dispatch = useDispatch();
    const types = useSelector(state => state.types)

    
}

export default PokemonCreate;