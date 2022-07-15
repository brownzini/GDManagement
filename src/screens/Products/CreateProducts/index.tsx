import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Modal } from 'react-native';
import BackButton from '../../../components/BackButton';
import { Button } from '../../../components/Button';

import { Input } from '../../../components/Input';
import { CategorySelect } from '../CategorySelect';

import { 
  Alert,
  KeyboardAvoidingView, 
  Platform,
  Keyboard
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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

export default function CreateProducts (){
  const navigation = useNavigation<any>();

  const [product_name, setProduct_name] = useState<string>('');
  const [product_price, setProduct_price] = useState<number>(0);
  
  const [category, setCategory] = useState({
    key: 'food',
    name: 'Food',
  });

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
      setCategoryModalOpen(false)
  }

  function verifyFields() {
    if (product_name === '' || product_price === 0) {
        Alert.alert('[ERROR]: Fill in all fields');
    } else {
        
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
     <Modal 
        visible={categoryModalOpen}>
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