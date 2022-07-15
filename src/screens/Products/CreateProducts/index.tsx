import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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

import { useProduct } from '../../../hooks/product';

export default function CreateProducts (){
  const navigation = useNavigation<any>();

  const [product_name, setProduct_name] = useState<string>('');
  const [product_price, setProduct_price] = useState<number>(0);
  
  const [category, setCategory] = useState({
    key: 'food',
    name: 'Food',
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const { setProducts } = useProduct();

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
      setCategoryModalOpen(false)
  }

  async function verifyFields() {
    if (product_name === '' || product_price === 0) {
        Alert.alert('[ERROR]: Fill in all fields');
    } else {
        const newProduct = {
          id: String(uuid.v4()),
          name: product_name,
          price: product_price,
          category: category.name,
          date: new Date()
        }

        try {
          const dataKey = '@gofinance:transactions';
          const data = await AsyncStorage.getItem(dataKey);
          const currentData = data ? JSON.parse(data) : [];

          const dataFormatted = [
              ...currentData,
              newProduct
          ];

          await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
          setProducts(dataFormatted);
          
          setProduct_name('');
          setProduct_price(0);
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
        <HeaderText> Create Products </HeaderText>
      </HeaderTitle>
      <CardHeader style={[styles.card, styles.elevation]}>
        <ContentArea>
          <ContentWrapper>
            <Field>
              <Input
                placeholder="Product Name"
                type="primary"
                autoCorrect={false}
                onChangeText={text => setProduct_name(text)}
              />
            </Field>
            <Field>
              <Input
                placeholder="Price"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType='numeric'
                onChangeText={text => setProduct_price(Number(text))}
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
              title="Create"
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