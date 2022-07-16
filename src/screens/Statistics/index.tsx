import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Modal, Text } from 'react-native';

import { VictoryPie } from 'victory-native';
import { Button } from '../../components/Button';
import { EXPENSES } from '../../utils/expensives';
import Months from '../../utils/Months';
import { CategorySelect } from '../Products/CategorySelect';

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
  WrapperButton, 
} from './styles';

export default function Statistics (){

 const [data, setData] = useState([]);
 const [month, setMonth] = useState({
    key: 'january',
    name: 'January',
 });
 const navigation = useNavigation<any>();

 const [categoryModalOpen, setCategoryModalOpen] = useState(false);

 useEffect(() => {
  setData(EXPENSES[month.name]);
 }, []);

 function handleOpenSelectCategoryModal() {
  setCategoryModalOpen(true)
 }

 function handleCloseSelectCategoryModal() {
      setCategoryModalOpen(false)
 }

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
          <VictoryPie 
            data={data}
            height={250}
            x="label"
            y="value"
            colorScale={data.map(expense => expense.color)}
            innerRadius={35}
            style={{
              labels: {
                display: 'none'
              }
            }}
          />
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
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          type="secondary"
          category={month}
          setCategory={setMonth}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </GraficContainer>
    <Footer> 
      <WrapperButton>
        <Button
          title={month.name}
          type="secondary"
          onPress={handleOpenSelectCategoryModal}
        />
      </WrapperButton>
    </Footer>
   </Container>
 )
}