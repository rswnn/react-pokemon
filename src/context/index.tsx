import React, {
  createContext, Dispatch, SetStateAction, useState, useEffect
} from 'react';

interface Pokemon {
  id?: number
  name?: string
  image?: string;
  color?: string
}

interface PokemonContextData {
  pokemons?: Pokemon[];
  setPokemons?: React.Dispatch<any>,
}

export const PokemonContext = createContext({} as PokemonContextData);

export const PokemonProvider = props => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokemonStorage = localStorage.getItem('pokemonlist');
    const pokemonList = JSON.parse(pokemonStorage || '[]');
    
    if (pokemonList) {
      setPokemons(pokemonList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemonlist', JSON.stringify(pokemons));
  }, [pokemons]);

  const providerValue = {
    pokemons,
    setPokemons,
  };

  return (
    <PokemonContext.Provider value={ providerValue }>
      { props.children }
    </PokemonContext.Provider>
  );
};