import styled from '@emotion/styled';
import { size } from 'constant';
import { images } from 'assets';
import { css } from '@emotion/react';

type CardType = {
    backgroundColor?: string;
    isPageMyPokemon?: boolean
}

const CardWrapper = styled.div<CardType>`
    width: 100%;
    height: ${props => props.isPageMyPokemon && '105'}px;
    cursor: pointer;
    background: ${props => props.backgroundColor};
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    img {
        margin: 0;
        width: 100%;
    }
    .number {
        position: absolute;
        z-index: -1;
        top: 5px;
        right: 5px;
        color: white;
    }
    .name-md {
        position: relative;
        z-index: -1;
        right: 20px;
        top: 30px;
        color: white;
    }
    .name-lg {
        position: relative;
        z-index: -1;
        right: 10px;
        color: white;
        opacity: 0.8;
        text-align: left;
        line-height: 30px;
    }
    .btn {
        color: white;
    }
    ::after {
        content: '';
        width: 70px;
        height: 70px;
        background-image: url(${images.IluPokeBall});
        background-repeat: no-repeat;
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        opacity: 0.1;
        background-size: 100px 100px;
        background-position: right -2em top -2em;
    }
    .btn-remove {
        background-color: #fa1616;
        position: absolute;
        bottom: 5px;
        right: 10px;
        opacity: 0.8;
    }
    @media screen and (max-width: 480px)  {
        ${props => props.isPageMyPokemon && css`
            justify-content: space-between;
            img {
                width: 150px;
            }
        `}
    }
    @media screen and (max-width: 375px)  {
        ${props => props.isPageMyPokemon && css`
            width: 340px;
            justify-content: space-between;
            img {
                width: 100px;
            }
        `}
    }
    @media screen and (max-width: 371px)  {
        ${props => props.isPageMyPokemon && css`
            width: 340px;
            justify-content: space-between;
            img {
                width: 100px;
            }
            .btn-remove {
                top: 70px;
            }
        `}
    }
`;

export { CardWrapper };