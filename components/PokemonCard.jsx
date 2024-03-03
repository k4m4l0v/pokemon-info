import React, { useContext } from 'react';
import { Context } from '../pages/_app';
import { observer } from 'mobx-react-lite';

export const PokemonCard = observer(() => {
    const {pokemons} = useContext(Context);

    return (
        <div className='card'>
            <h2 className='pokemon-name'>{pokemons.pokemon.name[0].toUpperCase() + pokemons.pokemon.name.slice(1)}</h2>
            <img 
                src={pokemons.image ? 
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemons.pokemon.id}.png`    
                    :
                    'https://pngimg.com/uploads/pokemon/pokemon_PNG152.png'} 
                height={200} 
                alt='pokemon' 
                className='image'
            />
            <ul className='list'>
                <li>id: {pokemons.pokemon.id}</li>
                <li>height: {pokemons.pokemon.height}</li>
                <li>attack: {pokemons.pokemon.stats[1].base_stat}</li>
            </ul>
        </div>
    )
})