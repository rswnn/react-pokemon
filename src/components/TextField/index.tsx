import React from 'react';
import { InputStyled } from './style';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    borderColor?: string
}

const TextField = ({ borderColor, ...props }: InputProps) => {
  return (
    <InputStyled borderColor={ borderColor } { ...props }/>
  );
};

export default TextField;
