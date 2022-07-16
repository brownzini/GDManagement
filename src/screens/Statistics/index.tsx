import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text } from 'react-native';



import { 
  ButtonBack,
  Circle,
  Container,  
  DetailsArea,  
  DetailsContent, 
  FieldColor, 
  FieldsContainer, 
  FieldText, 
  Footer, 
  GraficContainer, 
  GraficContent, 
  Header,
  HeaderContainer,
  HeaderTitle, 
} from './styles';

export default function Statistics (){

 const [data, setData] = useState([]);
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
           
        </Circle>
      </GraficContent>

      <DetailsContent> 
        <DetailsArea>
          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> Food </FieldText>
          </FieldsContainer>

          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> Veichles </FieldText>
          </FieldsContainer>

          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> teste kkk </FieldText>
          </FieldsContainer>

          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> teste kkk </FieldText>
          </FieldsContainer>
          
          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> kkk </FieldText>
          </FieldsContainer>

          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> kkk </FieldText>
          </FieldsContainer>

          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> kkk </FieldText>
          </FieldsContainer>

          <FieldsContainer>
            <FieldColor></FieldColor>
            <FieldText> kkk </FieldText>
          </FieldsContainer>                   
        </DetailsArea>
      </DetailsContent>
    </GraficContainer>
    <Footer> 
      
    </Footer>
   </Container>
 )
}