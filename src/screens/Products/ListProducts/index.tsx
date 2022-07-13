import React from 'react';
import BackButton from '../../../components/BackButton';

import { 
  CardHeader,
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
        <HeaderText> Products </HeaderText>
      </HeaderTitle>
      <CardHeader>
      
      </CardHeader>
    </Header>
   </Container>
 )
}