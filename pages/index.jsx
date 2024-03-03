import axios from "axios";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonChip } from "../components/PokemonChip";

const Index = ({pokemons}) => {
    return (
        <div className='container'>
            <div className='chips__wrapper'>
                <div className='chips__container'>
                    {pokemons.map(pokemon =>
                        <PokemonChip pokemon={pokemon} key={pokemon.id} />
                    )}
                </div>
            </div>
            <PokemonCard />
        </div>
    )
}

export default Index;

export async function getServerSideProps() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);

    return {
        props: {
            pokemons: response.data.results
        }
    }
}

