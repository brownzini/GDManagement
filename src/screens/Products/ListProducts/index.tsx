import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
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
  ProductsCardContent,
  WrapperButton, 
} from './styles';

import products from '../../../assets/products.png';
import { ProductsCard, ProductsCardProps } from '../../../components/ProductsCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
export interface DataListProps extends ProductsCardProps {
  id: string;
}

export default function ListProducts (){
 const [transactions, setTransactions] = useState<DataListProps[]>([
  {
    id: '1',
    name: 'Alimentos',
    date: '01/01/2020',
    price: '$ 10,00',
    category: 'Hamburger',
  },
  {
    id: '2',
    name: 'Produto 1',
    date: '01/01/2020',
    price: 'R$ 10,00',
    category: 'Hamburger',
  },
  {
    id: '3',
    name: 'Produto 1',
    date: '01/01/2020',
    price: 'R$ 10,00',
    category: 'Hamburger',
  }
 ]);
 const navigation = useNavigation<any>();
 return (
   <Container>
    <Header>
      <HeaderTitle>
        <BackButton 
          color="#fff"
          onPress={() => navigation.goBack()}
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
    <ProductsCardContent>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductsCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: getBottomSpace() }}
      />
    </ProductsCardContent>
   </Container>
 )
}

const styles = StyleSheet.create({
  card: {},
  elevation: {
    elevation: 15,
    shadowColor: 'black',
  },
});