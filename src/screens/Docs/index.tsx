import React from 'react';

import Books from '../../assets/books.png';

import { 
  Container, 
  Header,
  HeaderContent,
  HeaderTitle,
  ImageContainer, 
  ImageItem,
} from './styles';

export default function Docs (){
 return (
   <Container>
    <Header>
      <HeaderContent>
        <ImageContainer>
          <ImageItem source={Books} /> 
          <HeaderTitle> Documentation </HeaderTitle>
        </ImageContainer>
      </HeaderContent>
    </Header>
   </Container>
 )
}

//books