import React from 'react';
import { StyleSheet } from 'react-native';
import BackButton from '../../../components/BackButton';
import { Button } from '../../../components/Button';

import { 
  CardHeader,
  Container, 
  ContentArea, 
  ContentAreaTitle, 
  Header,
  HeaderText,
  HeaderTitle,
  Image,
  ImageArea,
  WrapperButton, 
} from './styles';

import products from '../../../assets/products.png';

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
      <CardHeader style={[styles.card, styles.elevation]}>
        <ContentArea>
          <ContentAreaTitle>
            Register your product
          </ContentAreaTitle>
          <WrapperButton>
            <Button
              title="Create"
              type="secondary"
            />
          </WrapperButton>
        </ContentArea>
        <ImageArea>
          <Image source={products} />
        </ImageArea>
      </CardHeader>
    </Header>
   </Container>
 )
}

const styles = StyleSheet.create({
  card: {
    
  },
  elevation: {
    elevation: 15,
    shadowColor: 'black',
  },
});