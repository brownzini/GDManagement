import React from 'react';

import { 
  FlatList, 
  StatusBar, 
  StyleSheet,
  Text, 
} from 'react-native';

import { 
  Container, 
  Header,
  HeaderContent,
  ImageContent,
  RequestContent,
  Title,
  SubTitle,
  RequestBody,
  Item,
  RequestBodyContent,
  ReviewContent,
  ReviewTitle,
  ReviewBody,
  ReviewFirst,
  ReviewThird,
  ReviewSecond,
  ReviewFourth,
  Icon,
  ReviewMoney,
  ReviewWrapper,
  ReviewMoneyTitle,
  ReviewStatisticsTitle,
  ReviewProductsTitle,
  ReviewWrapperProducts,
  Icon2,
  ReviewProductsTotal,
  ReviewWrapperSettings,
  ReviewSettingsTitle,
  Icon3,
} from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Faa',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Saas',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Taaa',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d772',
    title: 'Teeee',
  },
  {
    id: 'bd7acbea3-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Faa',
  },
  {
    id: '3ac68af2c-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Saas',
  },
  {
    id: '58694a01f-3da1-471f-bd96-145571e29d72',
    title: 'Taaa',
  },
  {
    id: '58694a00f-3da1-471f-bd96-145571e29d772',
    title: 'Teeee',
  },
];

export default function Home (){
 const renderItem = ({ item }) => (
  <Item></Item>
 );
 return (
   <Container>



   </Container>
 )
}

