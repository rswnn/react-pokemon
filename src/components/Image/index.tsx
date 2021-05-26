import React from 'react';
import { ImageContent } from './style';

type ImageProps = React.HTMLAttributes<HTMLDivElement> & React.DOMAttributes<any> & {
    src?: string;
    alt?: string
    style?: React.CSSProperties
}

const Image = ({
  src, style, alt, ...props
}: ImageProps) => {
  return (
    <ImageContent src={ src } style={ style } alt={ alt } { ...props }/>
  );
};

export default Image;
