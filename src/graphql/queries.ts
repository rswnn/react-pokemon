import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import {
  DataPokemon, DataPokemons, PokemonsVariables, PokemonVariables
} from './interfaces';

export const getPokemonsDocument = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      prevOffset
      results {
        url
        name
        image
      }
    }
  }
`;

export const getPokemonDocument = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          url
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

export const useGetPokemons = (baseOptions: Apollo.QueryHookOptions<DataPokemons, PokemonsVariables>) => {
  return Apollo.useQuery<DataPokemons, PokemonsVariables>(getPokemonsDocument, baseOptions);
};

export const useGetPokemon = (baseOptions: Apollo.QueryHookOptions<DataPokemon, PokemonVariables>) => {
  return Apollo.useQuery<DataPokemon, PokemonVariables>(getPokemonDocument, baseOptions);
};
