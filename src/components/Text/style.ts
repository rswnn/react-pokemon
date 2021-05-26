import styled from '@emotion/styled';
import { size } from 'constant';

type StyledTextProps = {
    type?: 'extraExtraLargeBold'
    |'extraExtraLarge'
    |'extraLargeBold' // 24px
    | 'extraLarge' // 24px
    | 'largeBold' // 18px
    | 'large' // 18px
    | 'mediumBold' // 16px
    | 'medium' // 16px
    | 'small' // 14px
    | 'extraSmall'; // 12px
    margin?: string
}

const StyledText = styled.p<StyledTextProps>`
    font-family: ${props => props.type === 'extraLargeBold'
    || props.type === 'largeBold'
    || props.type === 'mediumBold'
    ? 'PoppinsBold'
    : 'PoppinsRegular'
};
    font-size: ${props => props.type === 'extraExtraLargeBold'
    || props.type === 'extraExtraLarge'
    ? '32px' :
    props.type === 'extraLargeBold'
    || props.type === 'extraLarge'
      ? '24px' :
      props.type === 'largeBold'
    || props.type === 'large'
        ? '20px' :
        props.type === 'mediumBold'
    || props.type === 'medium'
          ? '16px' :
          props.type === 'small'
            ? '14px' :
            props.type === 'extraSmall'
              ? '12px' : '11px'};
    
    /* @media ${size.xs} {
      font-size: ${props => props.type === 'extraLargeBold'
    || props.type === 'extraLarge'
    ? '16px' :
    props.type === 'largeBold'
    || props.type === 'large'
      ? '14px' :
      props.type === 'mediumBold'
    || props.type === 'medium'
        ? '12px' :
        props.type === 'small'
          ? '11px' :
          props.type === 'extraSmall'
            ? '10px' : '9px'};
    } */
    margin: ${props => props.margin
    ? props.margin
    : '0px 0px 0px 0px'};
`;

export { StyledText };