import React, { useState } from 'react';
import { StyledBurger, LineStyled } from './style';
import RightNav from './RightNav';

const Burger = ({
  history, open, setOpen, handleNavigate
}) => {
  return (
    <>
      <StyledBurger open={ open } onClick={ () => setOpen(!open) } data-cy='burger'>
        <LineStyled />
        <LineStyled />
        <LineStyled />
      </StyledBurger>
      <RightNav open={ open } handleNavigate={ handleNavigate }/>
    </>
  );
};

export default Burger;