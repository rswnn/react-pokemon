export interface Result {
    url: string;
    name: string;
    image: string;
}

export interface Pokemons {
    count: number;
    next: string;
    previous: string | null;
    results: Result[];
    status: boolean;
    message: string;
    prevOffset: number
}

export interface DataPokemons {
    pokemons: Pokemons;
}

export interface PokemonsVariables {
    limit: number;
    offset: number;
}
export interface AbilityDetail {
    name: string;
  }
  
export interface Ability {
    ability: AbilityDetail;
  }
  
export interface MoveDetail {
    url: string;
    name: string;
  }
  
export interface Move {
    move: MoveDetail;
  }
  
export interface TypeDetail {
    name: string;
  }
  
export interface Type {
    type: TypeDetail;
  }
  
export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    abilities: Ability[];
    moves: Move[];
    types: Type[];
    message: string;
    status: boolean;
  }
  
export interface DataPokemon {
    pokemon: Pokemon;
}

export interface PokemonVariables {
    name: string
}