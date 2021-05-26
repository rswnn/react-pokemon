import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  Text, Grid, Card, Image
} from 'components';
import {
  Container, TitleWrapper, ContentWrapper, ImageLoadingWrapper, TotalStyled
} from './style';
import useDashboard from './useDashboard';
import { images } from 'assets';

const Dashboard = ({ history }: RouteComponentProps) => {
  const {
    data, loading, capitalizeFirstLetter, numberPadConverter, handleNavigate, colors, total
  } = useDashboard({ history });
  const renderPokemonList = () => {
    return (
      <Grid>
        { !loading && data && data.pokemons && data.pokemons.results.length > 0 &&
          data.pokemons.results.map((poke, index) => {
            return (
              <Card
                name={ capitalizeFirstLetter(poke.name) }
                image={ poke.image }
                key={ index }
                numberPad={ numberPadConverter(index) }
                onClick={ () => handleNavigate(poke, index) }
                backgroundColor={ colors[index % colors.length] }
                data-cy='card-pokemon'
              />
            );
          })
        }
      </Grid>
    );
  };
  if (loading) {
    return (
      <ImageLoadingWrapper data-cy='image-loading'>
        <Image src={ images.IluCharmander } className='img-load'/>
      </ImageLoadingWrapper>
    );
  }
  return (
    <Container className='dashboard'>
      <TitleWrapper>
        <Text text='What Pokemon are you Looking for?' type='extraLargeBold'/>
      </TitleWrapper>
      <ContentWrapper>
        { renderPokemonList() }
      </ContentWrapper>
      <TotalStyled>
        <Text text={ `${total} Pokemons` } type='small' data-cy={ total } />
      </TotalStyled>
    </Container>
  );
};

export default Dashboard;
