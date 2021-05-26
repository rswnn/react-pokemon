import { PokemonContext } from 'context';
import { useGetPokemon } from 'graphql/queries';
import {
  useCallback, useContext, useEffect, useState
} from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type DetailPokeProps = RouteComponentProps<
  { params?: string },
  any,
  { name?: string, image?:string, color?:string, numberPad?: string }
>
export const attributes = [
  {
    no: 0,
    name: 'Abilities',
    id: 'abilities'
  }, {
    no: 1,
    name: 'Moves',
    id: 'moves'
  }
];
const useDetailPokemon = ({ history }) => {
  const { pokemons, setPokemons } = useContext(PokemonContext);
  const { location } = history;
  const { state, pathname } = location;
  const name = pathname.split('/')[2];
  const {
    data, loading, error
  } = useGetPokemon({ variables: { name: state && state.name.toLowerCase() || '' }, });

  const [active, setActive] = useState(attributes[0]);
  const [showModal, setShowModal] = useState(false);
  const [nicknameValue, setNicknameValue] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    if (!loading && !data?.pokemon.name) {
      handleNavigate('404');
    }
  }, [data, loading]);

  useEffect(() => {
    return (() => {
      setShowModal(false);
      setIsDuplicate(false);
    });
  }, []);

  const catchPokemon = () => {
    const calculated = Math.random() * 100;
    if (calculated > 50) {
      const filteredPokemons = pokemons?.filter(poke => poke.name === state.name);
      if (filteredPokemons && filteredPokemons.length > 0) {
        setIsDuplicate(true);
      }
      setShowModal(true);
    }
  };
    
  const capturedPokemon = () => {
    const pokemon = {
      id: 1,
      name: isDuplicate ? nicknameValue : state.name,
      image: state.image,
      color: state.color
    };
    if (setPokemons) {
      setPokemons(prevState => {
        if (prevState.length > 0) {
          return [...prevState, pokemon];
        }
        return [pokemon];
      });
      handleNavigate('my-pokemon');
    }
  };
    
  const handleNavigate = useCallback(name => {
    history.push(`/${name}`);
    setShowModal(false);
  }, [pokemons]);
    
  const handleChangeActive = useCallback(attr => {
    setActive({
      no: attr.no,
      name: attr.name,
      id: attr.id
    });
  }, [active]);

  const handleChangeText = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNicknameValue(value);
  };

  return {
    capturedPokemon,
    catchPokemon,
    handleNavigate,
    handleChangeActive,
    active,
    showModal,
    state,
    setShowModal,
    attributes,
    nicknameValue,
    handleChangeText,
    data,
    loading,
    isDuplicate,
    name
  };
};

export default useDetailPokemon;