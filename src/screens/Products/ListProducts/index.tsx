import React from 'react';
import BackButton from '../../../components/BackButton';

import { 
  Container, 
  Header,
  HeaderText,
  HeaderTitle, 
} from './styles';

export default function ListProducts (){
 return (
   <Container>
    <Header>
      <HeaderTitle>
        <BackButton 
          color="#fff"
        />
        <HeaderText> teste kkkk </HeaderText>
      </HeaderTitle>
    </Header>
   </Container>
 )
}