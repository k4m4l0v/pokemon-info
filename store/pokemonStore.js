import { makeAutoObservable, toJS } from "mobx";

export default class PokemonStore {
    constructor() {
        this._pokemons = [];
        this._pokemon = {
            name: 'Pokemon',
            stats: [
                {},
                {
                    base_stat: ''
                }
            ]
        };
        this._image = false;

        makeAutoObservable(this);
    }

    setPokemons(pokemon) {
        this._pokemons.push(pokemon);
    }

    setPokemon(pokemon) {
        this._pokemon = pokemon;
    }

    setImage(bool) {
        this._image = bool;
    }

    get pokemons() {
        return toJS(this._pokemons);
    }

    get pokemon() {
        return toJS(this._pokemon);
    }

    get image() {
        return toJS(this._image);
    }
}
