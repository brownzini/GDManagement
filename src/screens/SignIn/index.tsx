import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import principal from '../../assets/planning.png';

import { Button } from "../../components/Button";

import { useNavigation } from '@react-navigation/native'

import { 
    Container, 
    Content, 
    Title, 
    Brand,
    Header,
    SubTitle, 
} from "./styles";

export function SignIn() {
  const navigation = useNavigation<any>();
  
  function next() {
    navigation.navigate('Splash');
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Header> 
            <Title> Your app to control your products </Title>
          </Header>
          <Brand source={principal} />
          <SubTitle>Get Started</SubTitle>
          <Button
            title="Go"
            type="primary"
            enabled={true}
            onPress={next}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}