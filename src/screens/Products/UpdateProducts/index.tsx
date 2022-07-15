import React, { useEffect, useState } from 'react';
import { StyleSheet, Modal } from 'react-native';
import BackButton from '../../../components/BackButton';
import { Button } from '../../../components/Button';

import { Input } from '../../../components/Input';
import { CategorySelect } from '../CategorySelect';

import uuid from 'react-native-uuid';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Alert,
  KeyboardAvoidingView, 
  Platform,
} from "react-native";

import { 
  ButtonSelect,
  CardHeader,
  Container, 
  ContentArea, 
  ContentWrapper, 
  Field, 
  Header,
  HeaderLabel,
  HeaderText,
  HeaderTitle,
  Icon,
  SelectContent,
  WrapperContent,
} from './styles';

import { useNavigation, useRoute } from "@react-navigation/native";

import { useProduct } from '../../../hooks/product';

export default function UpdateProducts (){
  const navigation = useNavigation<any>();

  const { params } = useRoute();
  const { data } = params as any;
  
  const { products } = useProduct();

  const [product_name, setProduct_name] = useState<string>(data.name);
  const [product_price, setProduct_price] = useState<string>(String(data.price));
  
  const [category, setCategory] = useState({
    key: 'food',
    name: data.category,
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const { editProduct } = useProduct();

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  async function verifyFields() {
    if (product_name === '' || Number(product_price) === 0) {
        Alert.alert('[ERROR]: Fill in all fields');
    } else {
        const newProduct = {
          id: data.id,
          name: product_name,
          price: Number(product_price),
          category: category.name,
          date: data.date
        }

        try {
          editProduct(newProduct);

          const dataKey = '@gofinance:transactions';
          const data = await AsyncStorage.getItem(dataKey);
          const currentData = data ? JSON.parse(data) : [];

          //await AsyncStorage.setItem(dataKey, JSON.stringify(products));
          
          setProduct_name('');
          setProduct_price('0');
          setCategory({
            key: 'food',
            name: 'Food',
          });

          navigation.goBack();
        } catch (error) {
          Alert.alert("[ERROR]: Couldn't save the product");
        }
    }
  }

  return (
   <Container>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
     <Header>
      <HeaderTitle>
        <BackButton 
          color="#fff"
          onPress={() => navigation.goBack()} 
        /> 
        <HeaderText> Alter Product </HeaderText>
      </HeaderTitle>
      <CardHeader style={[styles.card, styles.elevation]}>
        <ContentArea>
          <ContentWrapper>
            <Field>
              <Input
                value={product_name}
                type="primary"
                autoCorrect={false}
                onChangeText={text => setProduct_name(text)}
              />
            </Field>
            <Field>
              <Input
                value={product_price}
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType='numeric'
                onChangeText={text => setProduct_price(text)}
              />
            </Field>
            <WrapperContent>
             <ButtonSelect 
              onPress={handleOpenSelectCategoryModal}
             >
             <SelectContent>
              <HeaderLabel>
                {category.name}
              </HeaderLabel>
              <Icon name="down" />
             </SelectContent>
             </ButtonSelect>
            </WrapperContent>
            <Button 
              title="Update"
              onPress={verifyFields}
            />
          </ContentWrapper>
        </ContentArea>
      </CardHeader>
     </Header>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </KeyboardAvoidingView>
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