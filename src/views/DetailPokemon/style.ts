import styled from '@emotion/styled';
import { images } from 'assets';
const widthButtonAttr = (window.innerWidth / 2) - 50;

type DetailProps = {
    backgroundColor?: string
    color?: any
}

type AttributeStyledProps = {
    color?: string;
    active?: boolean
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100% !important;
    .mt-1 {
        margin-top: 0.5rem;
    }
`;

const ContentWrapper = styled.div<DetailProps>`
    padding: 0 1rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    p {
        color: white;
    }
    img {
        width: 200px;
        margin: auto auto auto auto;
        display: block;
        position: relative;
        -webkit-filter: blur(0px); 
        -moz-filter: blur(0px); 
        -ms-filter: blur(0px);
        top: 25px;
        z-index: 10;
        object-fit: cover
    }
`;

const TitleWrapper = styled.div`
    .number-pad {
        position: relative;
        top: 15px;
    }
`;

const DescriptionWrapper = styled.div`
    background-color: white;
    margin: 0;
    padding: 1rem 1rem;
    position: relative;
    top: -20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    .grid-wrapper {
        padding: 0 10px;
    }

`;

const TypeWrapper = styled.div`
    margin-top: 15px;
    div {
        margin-right: 7px;
    }
`;

const ThumbStyled = styled.div`
    width: auto;
    background-color: rgba(255,255,255,0.3);
    border-radius: 20px;
    text-align: center;
    padding: 0px 20px;
`;

const Wrapper = styled.div<DetailProps>`
    p.value {
        color: ${props => props.color};
        font-weight: bold;
    }
    p.divider {
        opacity: 0.5;
    }
    .move {
        width: 100%;
        text-align: left;
    }
`;

const AttributeStyled = styled.div<AttributeStyledProps>`
    width: ${widthButtonAttr}px;
    background-color: ${props => !props.active ? 'white' : props.color};
    border-radius: 20px;
    text-align: center;
    p {
        color: ${props => props.active ? 'white' : props.color};
    }
`;

const PokeballStyled = styled.div``;

const LoadingWrapper = styled.div<DetailProps>`
    position: 'absolute';
    background-color:${props => props.color ? props.color.color : 'white'};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

export {
  Container,
  TitleWrapper,
  ContentWrapper,
  DescriptionWrapper,
  TypeWrapper,
  ThumbStyled,
  Wrapper,
  AttributeStyled,
  PokeballStyled,
  LoadingWrapper
};