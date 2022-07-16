import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import { 
  ButtonBack,
  Circle,
  Container,  
  DetailsArea,  
  DetailsContent, 
  GraficContainer, 
  GraficContent, 
  Header,
  HeaderContainer,
  HeaderTitle, 
} from './styles';

export default function Statistics (){

 const navigation = useNavigation<any>();

 return (
   <Container>
      <StatusBar 
        style="dark" 
        translucent 
        backgroundColor='transparent' 
      />
    <Header>
      <HeaderContainer> 
        <ButtonBack onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="chevron-left"
            size={24}
            color="#646262"
          />
        </ButtonBack>
        <HeaderTitle> Statistics </HeaderTitle>
      </HeaderContainer>
    </Header>
    <GraficContainer>

      <GraficContent>
        <Circle>
          <Text> kkk </Text>
        </Circle>
      </GraficContent>

      <DetailsContent> 
        <DetailsArea>
          <Text> kkk </Text>
        </DetailsArea>
      </DetailsContent>

    </GraficContainer>
   </Container>
 )
}