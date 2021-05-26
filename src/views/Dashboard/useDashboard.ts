import { useEffect } from 'react';
import { useGetPokemons } from 'graphql/queries';
import {
  capitalizeFirstLetter, numberPadConverter, useInfiniteScroll
} from 'helper';
import { colors } from 'constant';
const useDashboard = ({ history }) => {

  useEffect(() => {
    return () => {
      setIsFetching(false);
    };
  }, []);

  const {
    data, loading, fetchMore
  } = useGetPokemons({
    variables: {
      limit: 20,
      offset: 0,
    },
  });

  const handleFetchMore = () => {
    const next = data ? data?.pokemons.results.length + 20 : 0;
    fetchMore({
      variables: {
        limit: 20,
        offset: next
      },
      updateQuery: updateQuery
    });
  };

  const updateQuery: any = (previousResult, { fetchMoreResult }) => {
    if (!fetchMoreResult) return previousResult;
    const {
      count, message, next, prevOffset, previous, status
    } = fetchMoreResult.pokemons;
    const results = [...previousResult.pokemons.results, ...fetchMoreResult.pokemons.results];
    const updatedQuery = Object.assign({}, previousResult, {
      pokemons: {
        __typename: previousResult.pokemons.__typename,
        count,
        message,
        next,
        prevOffset,
        previous,
        status,
        results: results
      },
    });
    setIsFetching(false);
    return updatedQuery;
  };

  const handleNavigate = (poke, index) => {
    history.push({
      pathname: `/detail/${poke.name}`,
      state: {
        name: capitalizeFirstLetter(poke.name),
        image: poke.image,
        color: colors[index % colors.length],
        numberPad: numberPadConverter(index)
      }
    });
  };
  const { isFetching, setIsFetching } = useInfiniteScroll(handleFetchMore);
  const total = data?.pokemons.results.length;

  return {
    capitalizeFirstLetter,
    numberPadConverter,
    useInfiniteScroll,
    colors,
    data,
    loading,
    handleNavigate,
    isFetching,
    total,
    handleFetchMore
  };
};

export default useDashboard;