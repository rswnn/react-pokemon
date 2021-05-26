import styled from '@emotion/styled';
import { colors, size } from 'constant';

type ButtonProps = {
    color?: string;
    disable?: boolean
}

const ButtonStyled = styled.div<ButtonProps>`
    background-color: ${props => props.color ? props.disable ? 'white' : props.color  : colors[0]};
    padding: 5px 10px;
    text-align: center;
    border-radius: 10px;

    p {
        color: ${props => props.disable ?  props.color : 'white' };
    }
    :hover {
        cursor: pointer;
    }
`;

export { ButtonStyled };