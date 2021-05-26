import React from 'react';
import { ListStyled, HeaderStyled } from './style';
import { Text, Image } from 'components';
import { images } from 'assets';

const RightNav = ({ open, handleNavigate }) => {
  return (
    <ListStyled open={ open }>
      <HeaderStyled/>
      <Text text='Dashboard' type='large' onClick={ () => handleNavigate() } data-cy='navigate-dashboard'/>
      <Text text='My Pokemon' type='large' onClick={ () => handleNavigate('my-pokemon') }/>
      <Image src={ images.IluWartortle } className='img-background'/>
    </ListStyled>
  );
};

export default RightNav;