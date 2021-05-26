import React from 'react';
import { StyledText } from './style';

type TextProps = React.DOMAttributes<any> & {
    text: string;
    type?: 'extraExtraLargeBold'
    | 'extraExtraLarge'
    | 'extraLargeBold'
    | 'extraLarge'
    | 'largeBold'
    | 'large'
    | 'mediumBold'
    | 'medium'
    | 'small'
    | 'extraSmall';
    margin?: string;
    className?: string
    style?: React.CSSProperties
}

const Text = ({
  text, type, margin, className, style, ...props
}: TextProps) => {
  return (
    <StyledText type={ type } margin={ margin } className={ className } style={ style } { ...props }>
      { text }
    </StyledText>
  );
};

const MemoizedText = React.memo(Text);

export default MemoizedText;
