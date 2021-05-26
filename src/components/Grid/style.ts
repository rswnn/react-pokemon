import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { size } from 'constant';

type GridType = {
    type?: 'lg' | 'md'
}

const GridWrapper = styled.div<GridType>`
    margin: 0;
    display: grid;
    grid-gap: 1.23rem;
    text-align: center;
    grid-template-columns: repeat(${props => props.type === 'md' ? 6 : 4}, 1fr);
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(${props => props.type === 'md' ? 5 : 3}, 1fr);
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(${props => props.type === 'md' ? 3 : 2}, 1fr);
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(${props => props.type === 'md' ? 2 : 1}, 1fr);
        grid-gap: 0.80rem;
    }
    @media screen and (max-width: 410px) {
        grid-template-columns: repeat(${props => props.type === 'md' ? 2 : 1}, 1fr);
        grid-gap: 0.80rem;
    }
    ${props => props.type === 'lg' &&
    css`
        @media screen and (max-width: 375px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 0.30rem;
        }
    `}
    @media screen and (max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`;

export { GridWrapper };