import axios from "axios";

export const fetchPokemon = async (link) => {
    const response = await axios.get(link);

    return response;
}
