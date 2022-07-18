import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Modal, Text } from 'react-native';

import { VictoryPie } from 'victory-native';
import { Button } from '../../components/Button';
import { useProduct } from '../../hooks/product';
import { GetColorCategory } from '../../utils/Categories';
import getMonth from '../../utils/getMonth';

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
  GraphicContainer, 
  GraphicContent, 
  Header,
  HeaderContainer,
  HeaderTitle,
  Title,
  WrapperButton, 
} from './styles';

export default function Statistics (){
 const currentDate = String(new Date().getMonth()+1);

 const [data, setData] = useState([{
    "color": "#ef21ef",
    "id": "1",
    "label": "null",
    "value": 1,
 }]);

 const [month, setMonth] = useState({
    key: currentDate,
    name: getMonth(currentDate),
 });

 const { products } = useProduct();
 const navigation = useNavigation<any>();

 const [categoryModalOpen, setCategoryModalOpen] = useState(false);

 const getTotalValuePerCategory = (category:string) => {
    let initialValue = 0;
    const result = products.filter((products: any) => {
        if (products.category === category) {
            return products;
        }
    }).reduce(
      (acc , actualValue) => acc + actualValue.price
      , initialValue
    )
    return result;
 }

  async function loadData () {  
    const insert:string[] = [];
    const AllProducts = products
    .filter((products: any) =>
      (new Date(products.date).getMonth()+1) === Number(month.key))
    .map((product: any) => {
      if(insert.indexOf(product.category) === -1){
        insert.push(product.category);
        return {
            id: product.id,
            label: product.category,
            value: getTotalValuePerCategory(product.category),
            color: GetColorCategory(product.category),
        };
      } 
    })
    .filter((prod) => prod !== undefined);

    if (AllProducts.length === 0) {
      setData([{
        "color": "#ef21ef",
        "id": "1",
        "label": "null",
        "value": 1,
      }]);
    } else {
      setData(AllProducts);
    }
 }

 useEffect(() => {
   loadData();
 }, []);

 useEffect(() => {
   loadData();
 }, [month]);

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

    <GraphicContainer>
      <GraphicContent visible={(data[0].label !== "null")}>
        <Circle>
          <VictoryPie 
            data={data}
            height={250}
            x="label"
            y="value"
            colorScale={data.map(product => product.color)}
            innerRadius={35}
            style={{
              labels: {
                display: 'none'
              }
            }}
          />
          {(data[0].label === "null") && <Title> No products registered </Title>}
        </Circle>
      </GraphicContent>

      {(data[0].label !== "null") &&
      <DetailsContent> 
        <DetailsArea>
          {data.map((product: any) => (
            <FieldsContainer key={product.id}>
              <FieldColor color={product.color}></FieldColor>
              <FieldText> {product.label} </FieldText>
            </FieldsContainer>
          ))}
        </DetailsArea>
      </DetailsContent>
      }
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          type="secondary"
          category={month}
          setCategory={setMonth}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </GraphicContainer>

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