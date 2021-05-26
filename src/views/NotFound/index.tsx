import React from 'react';
import {
  Text, Image, Button
} from 'components';
import { Container } from './style';
import { images } from 'assets';

const NotFound = ({ history }) => {
  
  const handleNavigate = () => {
    history.push('/');
  };
  return (
    <Container>
      <Text text='Oops.. Page Not Found' className='text-oops' />
      <Image src={ images.IluSnorlax }/>
      <Button className='mt-2' onClick={ handleNavigate }>
        <Text text='Go Dashboard'/>
      </Button>
    </Container>
  );
};

export default NotFound;
