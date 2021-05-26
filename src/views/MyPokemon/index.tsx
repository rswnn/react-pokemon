import { images } from 'assets';
import {
  Card, Grid, Text, Image, Button
} from 'components';
import { PokemonContext } from 'context';
import { capitalizeFirstLetter, numberPadConverter } from 'helper';
import React, { useContext } from 'react';
import {
  Container, ContentWrapper, TitleWrapper, EmptyStyled
} from './style';

const MyPokemon = ({ history }) => {
  const { pokemons, setPokemons } = useContext(PokemonContext);

  const handleNavigate = () => {
    history.push('/');
  };

  const handleRemovePokemon = name => {
    if (setPokemons) {
      setPokemons(prevState => {
        return prevState.filter(prev => prev.name !== name);
      });
    }
  };

  const renderPokemonList = () => {
    return (
      <Grid type='lg'>
        { pokemons && pokemons.length > 0 &&
          pokemons.map((poke, index) => {
            return (
              <Card
                name={ capitalizeFirstLetter(poke.name) }
                image={ poke.image }
                key={ index }
                numberPad={ numberPadConverter(index) }
                backgroundColor={ poke.color }
                isPageMyPokemon
                onClickButton={ () => handleRemovePokemon(poke.name) }
                data-cy='card-pokemon'
              />
            );
          })
        }
      </Grid>
    );
  };

  return (
    <Container>
      {
        pokemons && pokemons?.length > 0 ?
          <>
            <TitleWrapper>
              <Text text='My Pokemon' type='extraLargeBold'/>
            </TitleWrapper>
            <ContentWrapper>
              { renderPokemonList() }
            </ContentWrapper>
          </> :
          <EmptyStyled>
            <Text text='You dont have any Pokemons' className='text-oops' />
            <Image src={ images.IluAsh } className='img-ash'/>
            <Button className='mt-2' onClick={ handleNavigate }>
              <Text text='Get More Pokemon'/>
            </Button>
          </EmptyStyled>
      }
    </Container>
  );
};

export default MyPokemon;
