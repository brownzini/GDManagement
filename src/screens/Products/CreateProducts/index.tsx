import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import BackButton from '../../../components/BackButton';
import { Button } from '../../../components/Button';

import { Input } from '../../../components/Input';

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
  const [product_price, setProduct_price] = useState<string>('');
  const [product_category, setProduct_category] = useState<string>('');

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
          <ContentWrapper>
            <Field>
              <Input
                placeholder="Product Name"
                type="primary"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={text => setProduct_name(text)}
              />
            </Field>
            <Field>
              <Input
                placeholder="Price"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={text => setProduct_price(text)}
              />
            </Field>
            <WrapperContent>
             <ButtonSelect>
             <SelectContent>
              <HeaderLabel>
                Category
              </HeaderLabel>
              <Icon name="down" />
             </SelectContent>
             </ButtonSelect>
            </WrapperContent>
            <Button 
              title="Create"
            />
          </ContentWrapper>
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