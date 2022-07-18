//React and React native
import React from 'react';
import { FlatList } from 'react-native';

//Off Components
import { getBottomSpace } from 'react-native-iphone-x-helper';

//Images
import Books from '../../assets/books.png';

//Components
import CardDoc from '../../components/CardDoc';

//Utils
import DocsContent from '../../utils/DocsContent';

import { 
  Container, 
  Content, 
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
    <Content>
      <FlatList
          data={DocsContent}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardDoc data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
      />
    </Content>
   </Container>
 )
}