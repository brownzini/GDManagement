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
  LastProcutsBody,
  Item,
  LastProcutsContent,
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
  LastProcutsBodyContent,
  Brand,
  Photo,
} from './styles';

import { DATA } from '../../utils/Categories';

export default function Home (){
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

     <LastProcutsContent>
        <SubTitle> Last registered products </SubTitle>
        <LastProcutsBody style={[styles.card, styles.elevation]}>
         <LastProcutsBodyContent>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
         </LastProcutsBodyContent>
        </LastProcutsBody>  
     </LastProcutsContent>

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
            <Icon name="graph-bar" /> 
            <ReviewStatisticsTitle> 
              {''} Statistics 
            </ReviewStatisticsTitle>
          </ReviewSecond>

          <ReviewThird>
            <ReviewWrapperSettings>
             <Icon3 name="gear" />
             <ReviewSettingsTitle>
               Settings
             </ReviewSettingsTitle>
            </ReviewWrapperSettings>
          </ReviewThird>

          <ReviewFourth>
           <ReviewWrapperProducts>
             <Icon2 name="inventory" />
             <ReviewProductsTitle> 
               Products 
             </ReviewProductsTitle>
           </ReviewWrapperProducts>
           <ReviewProductsTotal>
               15
           </ReviewProductsTotal>
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