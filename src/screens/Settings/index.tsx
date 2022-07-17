import React from "react";
import { KeyboardAvoidingView, Platform, Text } from "react-native";

import { useNavigation } from '@react-navigation/native'

import { 
    Container, 
    Content,
    Field,
    Header,
    HeaderText,
    HeaderTitle,
    Wrapper,
    WrapperTitle, 
} from "./styles";

import BackButton from "../../components/BackButton";
import { Input } from "../../components/Input";

export default function Settings() {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header>
          <HeaderTitle>
            <BackButton 
              color="#fff"
              onPress={() => navigation.goBack()} 
            /> 
            <HeaderText> Settings </HeaderText>
          </HeaderTitle>
        </Header>
        <Content>
          <Wrapper>
           <Field>
            <Input 
              placeholder="username"
              autoCapitalize="none"
              autoCorrect={false}
            />
           </Field> 
          </Wrapper>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}