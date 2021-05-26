import styled from '@emotion/styled';
import { size, colors } from 'constant';
import { images } from 'assets';

type NavStyledProps = {
  isPageDetail?:boolean;
  backgroundColor?: any
}

type StyledBurgerProps = {
    open?: boolean
}

const NavStyled = styled.nav<NavStyledProps>`
  width: 100%;
  height: auto;
  z-index: 999;
  ${({ backgroundColor }) => backgroundColor && backgroundColor.color &&
  `background-color: ${backgroundColor.color};`
}
    
    @media ${size.md} {
      ::after {
      content: '';
      width: ${props => props.isPageDetail ? '100%' : '145px'};
      height: ${props => props.isPageDetail ? '300px' : '145px'};
      background-image: url(${images.IluPokeBall});
      background-repeat: no-repeat;
      position: absolute;
      z-index: ${props => props.isPageDetail ? '0' : '9'};
      top: ${props => props.isPageDetail ? '100px' : '0'};
      right: 0;
      opacity: 0.1;
      background-size: ${props => props.isPageDetail ? '300px 300px' : '200px 200px'};
      background-position: right ${props => props.isPageDetail ? '50%' : '-4em'} top ${props => props.isPageDetail ? '0em' : '-4.3em'};
  }
    }
`;
const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media ${size.md} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-of-type(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const ListStyled = styled.div<StyledBurgerProps>`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  p {
    padding: 0px 10px;
  }
  .img-background {
    display: none;
  }
  @media ${size.md} {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    z-index: 5;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    p {
      position: relative;
      color: ${colors[0]};
      top: 100px;
      margin: 5px 0;
    }
    .img-background {
      display: block;
      margin: auto;
      width: 250px;
      height: 250px;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      opacity: 0.3;
    }
  }
`;
const LogoStyled = styled.img`
    width: 155px;
    height: 55px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  @media ${size.xs} {
    padding: 5px 10px;
  }
  svg {
    padding: 5px 0;
  }
`;
const LineStyled = styled.div``;

const HeaderStyled = styled.div`
  display: none;
  @media ${size.md} {
    display: block;
    height: 150px;
    width: 300px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${colors[0]};
  }
`;
export {
  NavStyled, NavWrapper, LogoStyled, StyledBurger, ListStyled, LineStyled, HeaderStyled
};