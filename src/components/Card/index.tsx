import React from 'react';
import { CardWrapper } from './style';
import {
  Text, Image, Button
} from 'components';

type CardProps = React.DOMAttributes<any> & {
    name?: string;
    image?: string;
    numberPad?: string
    backgroundColor?: string;
    isPageMyPokemon?: boolean;
    onClickButton?: React.MouseEventHandler<HTMLDivElement>
}

const Card = ({
  name = '',
  image,
  numberPad = '',
  isPageMyPokemon = false,
  onClickButton,
  ...props
} : CardProps) => {
  return (
    <CardWrapper isPageMyPokemon={ isPageMyPokemon } { ...props }>
      <Image src={ image } alt={ name } />
      <Text text={ numberPad } type='mediumBold' className='number'/>
      <Text text={ name } type={ isPageMyPokemon ? 'extraExtraLarge' : 'mediumBold' } className={ isPageMyPokemon ? 'name-lg' : 'name-md' }/>
      { isPageMyPokemon &&
      <Button className='btn-remove' onClick={ onClickButton }>
        <Text text='Remove' type='small' className='btn'/>
      </Button>
      }
    </CardWrapper>
  );
};

const MemoizedCard = React.memo(Card);

export default Card;
