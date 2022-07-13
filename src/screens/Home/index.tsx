import React from 'react';

import { 
  FlatList, 
  StatusBar, 
  StyleSheet,
  Text, 
} from 'react-native';

import Hamburger from '../../assets/hamburger.png';
import home_appliance from '../../assets/home_appliance.png';
import electronics from '../../assets/electronics.png';
import derivative from '../../assets/derivative.png';
import materials from '../../assets/materials.png';
import workplace_safety from '../../assets/workplace_safety.png';
import surveillance from '../../assets/surveillance.png';
import vehicle from '../../assets/vehicle.png';

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
} from './styles';

const DATA = [
  {
    id: '1',
    title: Hamburger,
  },
  {
    id: '2',
    title: home_appliance,
  },
  {
    id: '3',
    title: electronics,
  },
  {
    id: '4',
    title: derivative,
  },
  {
    id: '5',
    title: materials,
  },
  {
    id: '6',
    title: workplace_safety,
  },
  {
    id: '7',
    title: surveillance,
  },
  {
    id: '8',
    title: vehicle,
  },
];

export default function Home (){
 const renderItem = ({ item }) => (
  <Item style={{
    elevation: 2,
    shadowColor: 'black',
  }}>
    <Brand source={item.title} />
  </Item>
 );
 return (
   <Container>
    
     <Header>
      <HeaderContent>
        <Title> 👋Hi{'\n'} Gabriel David </Title>
        <ImageContent>
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