import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import BackButton from '../../../components/BackButton';

import { 
  CardHeader,
  Container, 
  ContentArea, 
  Header,
  HeaderLabel,
  HeaderText,
  HeaderTitle,
} from './styles';

export default function CreateProducts (){
  const navigation = useNavigation<any>();
  return (
    <Container>
     <Header>
      <HeaderTitle>
        <BackButton 
          color="#fff"
          onPress={() => navigation.goBack()} 
        /> 
        <HeaderText> Create Products </HeaderText>
      </HeaderTitle>
      <CardHeader style={[styles.card, styles.elevation]}>
        <ContentArea>
          <HeaderLabel>
            Product Name
          </HeaderLabel>
        </ContentArea>
      </CardHeader>
     </Header>
    </Container>
  )
}

const styles = StyleSheet.create({
  card: {},
  elevation: {
    elevation: 2,
    shadowColor: 'black',
  },
});