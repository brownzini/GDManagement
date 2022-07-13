import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import principal from '../../assets/principal.png';

import { Button } from "../../components/Button";

import { useNavigation } from '@react-navigation/native'

import { 
    Container, 
    Content, 
    Title, 
    Brand, 
} from "./styles";

export function SignIn() {
  const navigation = useNavigation<any>()
  
  function next() {
    navigation.navigate('Splash');
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Brand source={principal} />
          <Title>Get Started</Title>
          <Button
            title="Go"
            type="secondary"
            enabled={true}
            onPress={next}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}