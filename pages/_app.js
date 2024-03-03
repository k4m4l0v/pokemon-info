import PokemonStore from '../store/pokemonStore';
import '../styles/global.css';
import { createContext } from 'react';

export const Context = createContext();

export default function MyApp({Component, pageProps}) {
    return (
        <Context.Provider
            value={
                {
                    pokemons: new PokemonStore()
                }
            }
        >
            <Component {...pageProps} />
        </Context.Provider>
    )
}
