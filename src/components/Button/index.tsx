import React from 'react';
import { ButtonStyled } from './style';

type ButtonType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    color?: string;
    disable?: boolean
}

const Button = ({
  children, color, disable, ...props
}: ButtonType) => {
  return (
    <ButtonStyled color={ color } disable={ disable } { ...props }>
      { children }
    </ButtonStyled>
  );
};

export default Button;
