import React from 'react';

import { 
  FlatList, 
  Image, 
  StatusBar, 
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

import { DATA } from '../../utils/Categories';
import { useNavigation } from '@react-navigation/native';

export default function Home (){

 const navigation = useNavigation<any>();

 function next() {
   navigation.navigate('ListProducts');
 }

 const renderItem = ({ item }) => (
  <Item style={{
    elevation: 2,
    shadowColor: 'black',
  }}>
    <Brand source={item.img} />
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
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
         </LastProductsBodyContent>
        </LastProductsBody>  
     </LastProductsContent>

     <ReviewTitle> Weekly Review </ReviewTitle>

     <ReviewContent>
        <ReviewBody>
          
          <ReviewFirst>
             <ReviewWrapper>
                <ReviewMoneyTitle> Total </ReviewMoneyTitle>
                <ReviewMoney> $10.52 </ReviewMoney>
             </ReviewWrapper>
          </ReviewFirst>
          
          <ReviewSecond>
           <ButtonContent2>
            <ReviewContent2>
             <Icon name="graph-bar" /> 
             <ReviewStatisticsTitle> 
               {''} Statistics 
             </ReviewStatisticsTitle>
            </ReviewContent2>
           </ButtonContent2>
          </ReviewSecond>

          <ReviewThird>
           <ButtonContent3>
            <ReviewWrapperSettings>
             <Icon3 name="gear" />
             <ReviewSettingsTitle>
               Settings
             </ReviewSettingsTitle>
            </ReviewWrapperSettings>
           </ButtonContent3>
          </ReviewThird>

          <ReviewFourth>
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
               15
            </ReviewProductsTotal>
           </ButtonContent>
          </ReviewFourth>

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