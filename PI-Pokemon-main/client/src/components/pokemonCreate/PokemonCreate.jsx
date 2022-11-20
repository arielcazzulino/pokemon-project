import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postPokemon, getPokemonType } from '../../redux/Actions';
import {NavBar} from '../nav/Nav'
import Styles from './Styles.module.css'
import pokeball from '../img/pokeBall2.png'
import iconAlert from '../img/iconAlert.png'
import {Footer} from '../footer/Footer'

function validate(input){
    let errors = {};
    if(!input.name) errors.name = 'Name is required'
    if(input.name.length < 4) errors.name = '4 characters minimum required'
    if(input.hp < 10) errors.hp = 'The minimum HP requirement is 10'
    if(input.hp > 500) errors.hp = 'The maximum HP score allowed is 500'
    if(input.attack < 50) errors.attack = 'The minimum attack points required is 50'
    if(input.attack > 950) errors.attack = 'The maximun attack points required is 950'
    if(input.defense < 50) errors.defense = 'The minimum defense points required is 50'
    if(input.defense > 950) errors.defense = 'The maximun defense points required is 950'
    if(input.speed < 10) errors.speed = 'The minimum speed requirement is 10'
    if(input.speed > 500) errors.speed = 'The maximum speed allowed is 500'
    if(input.height < 1) errors.height = 'The minimum height requirement is 1'
    if(input.height > 5) errors.height = 'The maximum height score allowed is 5'
    if(input.weight < 1) errors.weight = 'The minimum weight requirement is 1'
    if(input.weight > 1000) errors.weight = 'The maximum weight score allowed is 1000'
    if(input.types.length === 1) errors.types = 'Two types required'

    return errors
}

//Component

export function PokemonCreate(){
    const dispatch = useDispatch();
    const types = useSelector(state => state.types)
    const history = useHistory();

    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    })

    const [errors, setErrors] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: ''
    })
    
    useEffect(()=>{
        dispatch(getPokemonType());
    }, [dispatch])

    //handles

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const onChangeTypes = (e) =>{
        let newType = e.target.value
        let ignore = newType === input.types[0] ? true : false
        let ignore2 = newType === 'Select Types' ? true : false

        if(!ignore && !ignore2){
            setInput({
                ...input,
                types: [...input.types, newType]
            })
            setErrors(validate({
                ...input,
                types: [...input.types, newType]
            })) 
        }
    }
    const handleClose = (e) =>{
        let returnValue = input.types.filter(el=> el !== e.target.id)  
        
        setInput({
            ...input,
            types: returnValue    
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input)
        dispatch(postPokemon(input))
        alert('Your Pokémon was created :)')
        setInput({ 
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: []
        })
        history.push('/home')
    }

    //inputs enabled conditions

    let nameCondition = input.name.length >= 4 && !errors.name ? true : false 
    let hpCondition = input.hp.length >= 2 && !errors.hp ? true : false 
    let attackCondition = input.attack.length >= 2 && !errors.attack ? true : false
    let defenseCondition = input.defense.length >= 2 && !errors.defense ? true : false
    let speedCondition = input.speed.length >= 2 && !errors.speed ? true : false
    let heightCondition = input.height.length >= 1 && !errors.height ? true : false
    let weightCondition = input.weight.length >= 1 && !errors.weight ? true : false
    let typesCondition = input.types.length === 2 

    return (
        <>    
            <NavBar/>
            <div className={Styles.mainContainer}>               
                <div className={Styles.imgAndFormContainer}>
                    <img src={pokeball} className={Styles.img} alt='form' />
                    <div className={Styles.formConatiner}>
                        <h3 className={Styles.h3}>Create your Pokémon</h3>
                        <form className={Styles.form}>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Name:</label> 
                                <input type="text" placeholder='Enter Pokémon name' value={input.name} name='name' onChange={handleChange} className={Styles.input}/>
                                {
                                    errors.name && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/><p className={Styles.error}> {errors.name} </p></div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Hp:</label>
                                <input type="number" min='10' max='500' placeholder='Enter healt points' value={input.hp} name='hp'onChange={handleChange} className={Styles.input} disabled={nameCondition === false}/>
                                {
                                   nameCondition && errors.hp && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/> <p className={Styles.error}> {errors.hp} </p> </div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Attack:</label>
                                <input type="number" min='50' max='950' placeholder='Enter attack points' value={input.attack} name='attack' onChange={handleChange} className={Styles.input} disabled={hpCondition === false}/>
                                {
                                   hpCondition && errors.attack && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/><p className={Styles.error}> {errors.attack} </p></div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Defense:</label>
                                <input type="number" min='50' max='950' placeholder='Enter defense points' value={input.defense} name='defense' onChange={handleChange} className={Styles.input} disabled={attackCondition === false}/>
                                {
                                   attackCondition && errors.defense && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/> <p className={Styles.error}> {errors.defense} </p> </div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Speed:</label>
                                <input type="number" min='10' max='500' placeholder='Select pokémon speed' value={input.speed} name='speed' onChange={handleChange} className={Styles.input} disabled={defenseCondition === false}/>
                                {
                                   defenseCondition && errors.speed && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/> <p className={Styles.error}> {errors.speed} </p> </div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Height:</label>
                                <input type="number" min='1' max='5' placeholder='Enter pokémon height' value={input.height} name='height' onChange={handleChange} className={Styles.input} disabled={speedCondition === false}/>
                                {
                                   speedCondition && errors.height && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/> <p className={Styles.error}> {errors.height} </p> </div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Weight:</label>
                                <input type="number" min='1' max='1000' placeholder='Enter pokémon weight' value={input.weight} name='weight' onChange={handleChange} className={Styles.input} disabled={heightCondition === false}/>
                                {
                                   heightCondition && errors.weight && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/> <p className={Styles.error}> {errors.weight} </p> </div>
                                }
                            </div>
                           
                            <div className={Styles.inputAndLabelContainer}>
                                <label>Types of your Pokémon:</label>
                                    <select onChange={(e)=>onChangeTypes(e)} className={Styles.select} disabled={weightCondition === false || input.types.length === 2}>
                                    <option>Select Types</option>
                                        {   
                                            types?.map(type => {
                                                return (<option key={type.id} value={type.name} id={type.name}> {type.name} </option>)
                                            })
                                        }
                                    </select>
                                    <div className={Styles.selectedTypes}>
                                        {
                                            input.types.map((el, i) => <div key={i} className={Styles.typesTags}> <p>{el}</p> <p className={Styles.closeTag} onClick={handleClose}  id={el}>x</p> </div>)
                                        }
                                    </div>
                                    {
                                        weightCondition && errors.types && <div className={Styles.divAlert}><img src={iconAlert} alt="Alert" className={Styles.iconAlert}/> <p className={Styles.error}> {errors.types} </p> </div>
                                    } 
                            </div>
                                    
                            <button type='submit' onClick={handleSubmit} disabled={typesCondition === false} className={!typesCondition ? Styles.submitDisabled : Styles.submit}>Create Pokémon!</button>
                        </form>
                    </div> 
                </div> 
            </div>
            <Footer/>
        </>    
    )
}

export default PokemonCreate;