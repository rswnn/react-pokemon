import React from 'react';
import { images } from 'assets';
import { withRouter } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import {
  NavStyled, LogoStyled, NavWrapper
} from './style';
import Burger from './Burger';
import useNavbar from './useNavbar';

const NavBar = ({ history }) => {
  const {
    open, setOpen, handleNavigate, handleNavigateBack, isPageDetail, state
  } = useNavbar({ history });
  return (
    <NavStyled isPageDetail={ isPageDetail } backgroundColor={ state }>
      <NavWrapper>
        {
          !isPageDetail ?
            <LogoStyled src={ images.IluLogoPoke } onClick={ () => handleNavigate() }/> :
            <MdArrowBack onClick={ () =>  handleNavigateBack() } size={ 32 } cursor='pointer' color='white' />
        }
        {
          isPageDetail ?
            null :
            <Burger history={ history } open={ open } setOpen={ setOpen } handleNavigate={ handleNavigate } />
        }
      </NavWrapper>
    </NavStyled>
  );
};

const MemoizedNavbar = React.memo(NavBar);

export default withRouter(MemoizedNavbar);
