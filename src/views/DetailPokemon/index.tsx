import React from 'react';

import {
  Container, TitleWrapper, ContentWrapper, DescriptionWrapper, ThumbStyled, TypeWrapper, Wrapper, AttributeStyled, PokeballStyled, LoadingWrapper
} from './style';
import {
  Text, Image, Grid, Modal, Button, TextField
} from 'components';
import useDetailPokemon, { DetailPokeProps } from './useDetailPokmeon';

const DetailPokemon = ({ history }: DetailPokeProps) => {
  const {
    data, loading, capturedPokemon,
    active, showModal, state, handleChangeActive,
    catchPokemon, setShowModal, attributes, handleChangeText,
    nicknameValue, isDuplicate, name
  } = useDetailPokemon({ history });
  
  const renderTypePokemon = () => {
    return  data && !loading && data.pokemon.types &&  data.pokemon.types.map((type, index) => {
      return <ThumbStyled key={ index } data-cy='thumb'><Text text={ type.type.name } key={ index } type='medium'/></ThumbStyled>;
    });
  };

  const renderAttributesButton = () => {
    return attributes.map((attr, index) => {
      return (
        <AttributeStyled
          active={ active.no === index }
          color={ state && state.color }
          key={ index }
          data-cy='attributes'
          onClick={ () => handleChangeActive(attr) }
        >
          <Text text={ attr.name } type='large'/>
        </AttributeStyled>
      );
    });
  };

  const renderAttributeContent = () => {
    return (
      <Grid className='mt-3'>
        { data && !loading && data.pokemon.moves &&
          active.no > 0 ? data?.pokemon.moves.map((attr, index) => {
            return (
              <Text text={ attr.move.name } type='small' key={ index } className='move' data-cy='moves' />
            );
          }) :
          data && !loading &&  data.pokemon.abilities && data.pokemon.abilities.map((attr, index) => {
            return (
              <Text text={ attr.ability.name } type='small' key={ index } className='move' data-cy='abilities' />
            );
          })
        }
      </Grid>
    );
  };

  const renderModal = () => {
    return (
      <Modal showModal={ showModal } setShowModal={ setShowModal }>
        <Text text={ isDuplicate ? `Duplicate ${name || '' }` : `You have got ${ name || ''  }` } type='largeBold' className='title-modal'/>
        { isDuplicate &&
          <TextField
            value={ nicknameValue }
            placeholder='Enter another name'
            onChange={ e => handleChangeText(e) }
            borderColor={ state && state.color }
            id='text-input-name'
          />
        }
        <Button
          color={ state && state.color }
          disable={ isDuplicate ? nicknameValue === '' : isDuplicate }
          onClick={ () => {
            if (isDuplicate ? nicknameValue === '' : isDuplicate) {
              return null;
            } else {
              capturedPokemon();
            }
          } }
          className='mt-1'
        >
          <Text text={ 'Save to My Pokemon' } type='medium' />
        </Button>
      </Modal>
    );
  };

  if (loading) {
    return <LoadingWrapper color={ state } />;
  }

  return (
    <Container>
      <ContentWrapper backgroundColor={ state && state.color }>
        <TitleWrapper className='row space-between align-items-center'>
          <Text text={ state && state.name || '' } type='extraLargeBold' data-cy={ name } className='name-pokemon' />
          <Text text={ state && state.numberPad || '' } type='mediumBold' className='number-pad' />
        </TitleWrapper>
        <TypeWrapper className='row'>
          { renderTypePokemon() }
          <ThumbStyled>
            <Text text={ 'Water' } type='medium'/>
          </ThumbStyled>
        </TypeWrapper>
        <Image src={ state && `${state.image}` } data-cy={ `img-${name}` } />
      </ContentWrapper>
      <DescriptionWrapper>
        <Wrapper className='row space-around align-items-center pl-6 pr-6'>
          <Wrapper className='text-center' color={ state && state.color }>
            <Text text={ data?.pokemon.height && data?.pokemon.height.toString() || '' } type='extraExtraLarge' className='value' data-cy='height'/>
            <Text text='Height' type='mediumBold'/>
          </Wrapper>
          <Text text={ '|' } type='extraExtraLarge' className='mr-3 ml-3 divider'/>
          <Wrapper className='text-center' color={ state && state.color }>
            <Text text={ data?.pokemon.weight && data?.pokemon.weight.toString() || '' } type='extraExtraLarge' className='value' data-cy='weight'/>
            <Text text='Weight' type='mediumBold'/>
          </Wrapper>
        </Wrapper>
        <Wrapper className='row space-around align-items-center mt-3'>
          { renderAttributesButton() }
        </Wrapper>
        <Wrapper className='mt-3 grid-wrapper'>
          <Text text={ active.name } type='mediumBold' />
          { renderAttributeContent() }
        </Wrapper>
      </DescriptionWrapper>
      { renderModal() }
      <PokeballStyled className='pokeball' onClick={ () => catchPokemon() }/>
    </Container>
  );
};

export default DetailPokemon;
