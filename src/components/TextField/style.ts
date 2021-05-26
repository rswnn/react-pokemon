import styled from '@emotion/styled';
import { size } from 'constant';

type InputType = {
    borderColor?: string
}

const InputStyled = styled.input<InputType>`
    display: block;
    width: calc(100% - 100px);
    outline: none !important;
    margin: 10px 0;
    padding: 8px 15px;
    border: 1px solid ${props => props.borderColor ? props.borderColor : 'tomato'};
    border-radius: 5px;
    font-family: 'PoppinsRegular';

    ::-webkit-input-placeholder {
    font-family: 'PoppinsRegular';
        }

    :-ms-input-placeholder {
    font-family: 'PoppinsRegular';
    }

    :-moz-placeholder {
    font-family: 'PoppinsRegular';
    }

    ::-moz-placeholder {
    font-family: 'PoppinsRegular';
    }
    &:focus {
        outline: none;
    }

`;

export { InputStyled };