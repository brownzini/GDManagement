import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Button } from '../../../components/Button';

import { 
  ButtonBack,
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

import ProductsImage from '../../../assets/products.png';
import { ProductsCard, ProductsCardProps } from '../../../components/ProductsCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useProduct } from '../../../hooks/product';
export interface DataListProps extends ProductsCardProps {
  id: string;
}

export default function ListProducts (){
 
 const navigation = useNavigation<any>();
 const { products } = useProduct();

 return (
   <Container>
    <Header>
      <HeaderTitle>
        <ButtonBack onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="chevron-left"
            size={24}
            color="#fff"
          />
        </ButtonBack>
        <HeaderText> Products List </HeaderText>
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
              onPress={() => navigation.navigate('CreateProducts')}
            />
          </WrapperButton>
        </ContentArea>
        <ImageArea>
          <Image source={ProductsImage} />
        </ImageArea>
      </CardHeader>
    </Header>
    <ProductsCardContent>
      <FlatList
        data={products}
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