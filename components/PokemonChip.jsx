import React, { useContext } from 'react';
import { Chip } from '@mui/joy';
import { observer } from 'mobx-react-lite';
import { Context } from '../pages/_app';
import { fetchPokemon } from '../http/pokemonApi';

export const PokemonChip = observer(({pokemon}) => {
    const {pokemons} = useContext(Context);

    const click = () => {
        fetchPokemon(pokemon.url)
        .then(res => {
            pokemons.setPokemon(res.data);
            pokemons.setImage(true);
        })
    }

    return (
        <Chip
            color="primary"
            onClick={click}
            size="lg"
            variant="solid"
        >
            {pokemon.name}
        </Chip>
    )
})
