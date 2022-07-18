import React, { useEffect, useState } from 'react';

import { 
  FlatList, 
  StyleSheet,
} from 'react-native';

import { 
  Container, 
  Header,
  HeaderContent,
  ImageContent,
  Title,
  SubTitle,
  Item,
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
  Brand,
  Photo,
  ButtonContent,
  ButtonContent2,
  ReviewContent2,
  ButtonContent3,
  LastProductsContent,
  LastProductsBody,
  LastProductsBodyContent,
} from './styles';

import { GetIconsCategory } from '../../utils/Categories';
import { useNavigation } from '@react-navigation/native';
import { useProduct } from '../../hooks/product';
import { useAuth } from '../../hooks/auth';

export default function Home (){
 const navigation = useNavigation<any>();

 const { products } =  useProduct();

 const {
    isEnabledTotal, 
    isEnabledStatistics, 
    isEnabledSettings, 
    isEnabledProducts,
 } = useAuth();


 const [totalValueResult, setTotalValueResult] = useState<number>(0);

 useEffect(() => { 
    let initialValue = 0;
    let result = products.reduce(
      (acc , actualValue) => acc + actualValue.price
      , initialValue
    );
    setTotalValueResult(result);
 }, [products]);

 const renderItem = ({ item }) => (
  <Item style={{
    elevation: 2,
    shadowColor: 'black',
  }}>
    <Brand source={GetIconsCategory(item.category)} />
  </Item>
 );

 return (
  <Container>
     <Header>
      <HeaderContent>
        <Title> 👋Hi{'\n'} Gabriel David </Title>
        <ImageContent>
          <Photo 
            source={{ 
              uri: 'https://avatars.githubusercontent.com/GabrielDavid1' 
            }} 
          />
        </ImageContent>
      </HeaderContent> 
     </Header>

     <LastProductsContent>
        <SubTitle> Last registered products </SubTitle>
        <LastProductsBody style={[styles.card, styles.elevation]}>
         <LastProductsBodyContent>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
         </LastProductsBodyContent>
        </LastProductsBody>  
     </LastProductsContent>

     <ReviewTitle> Speed dial</ReviewTitle>

     <ReviewContent>
        <ReviewBody>     
        {isEnabledTotal && (
          <ReviewFirst>
            <ReviewWrapper>
              <ReviewMoneyTitle> Total </ReviewMoneyTitle>
              <ReviewMoney> 
                  $ { totalValueResult.toFixed(2) } 
              </ReviewMoney>
            </ReviewWrapper>
          </ReviewFirst>   )}
          
          {isEnabledStatistics && (
          <ReviewSecond 
            firstActive={isEnabledTotal}
            secondActive={isEnabledStatistics}
            thirdActive={isEnabledSettings}
            fourthActive={isEnabledProducts}
          >
           <ButtonContent2
            onPress={() => navigation.navigate('Statistics')}
           >
            <ReviewContent2>
             <Icon name="graph-bar" /> 
             <ReviewStatisticsTitle> 
               {''} Statistics 
             </ReviewStatisticsTitle>
            </ReviewContent2>
           </ButtonContent2>
          </ReviewSecond>)}
          
          <ReviewThird
            firstActive={isEnabledTotal}
            secondActive={isEnabledStatistics}
            thirdActive={isEnabledSettings}
            fourthActive={isEnabledProducts}
          >
           <ButtonContent3 
            onPress={() => navigation.navigate('Settings')}
           >
            <ReviewWrapperSettings>
             <Icon3 name="gear" />
             <ReviewSettingsTitle>
               Settings
             </ReviewSettingsTitle>
            </ReviewWrapperSettings>
           </ButtonContent3>
          </ReviewThird>

          {isEnabledProducts && (
          <ReviewFourth
            firstActive={isEnabledTotal}
            secondActive={isEnabledStatistics}
            thirdActive={isEnabledSettings}
            fourthActive={isEnabledProducts}
          >
           <ButtonContent 
            onPress={() => navigation.navigate('ListProducts')}
           >
            <ReviewWrapperProducts>
             <Icon2 name="inventory" />
             <ReviewProductsTitle> 
               Products 
             </ReviewProductsTitle>
            </ReviewWrapperProducts>
            <ReviewProductsTotal>
               {products.length}
            </ReviewProductsTotal>
           </ButtonContent>
          </ReviewFourth>)}
        </ReviewBody>
     </ReviewContent>
   </Container>
 )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B75AFF',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  elevation: {
    elevation: 10,
    shadowColor: 'black',
  },
});