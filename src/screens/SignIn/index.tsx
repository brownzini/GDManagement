//React and React native
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

//Images
import principal from '../../assets/teamwork.png';

//Components
import { Button } from "../../components/Button";

//Contexts
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
          <Header></Header>
          <Title> Your app to control your products </Title>
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