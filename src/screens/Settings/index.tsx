import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { useNavigation } from '@react-navigation/native'

import { 
    Container, 
    Content, 
} from "./styles";

export default function Settings() {
  const navigation = useNavigation<any>();
  
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>

        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}