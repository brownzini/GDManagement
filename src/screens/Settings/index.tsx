import React, { useState } from "react";
import { 
  KeyboardAvoidingView, 
  Platform, 
  Switch 
}
 from "react-native";

import { useNavigation } from '@react-navigation/native'

import { 
    Container, 
    Content,
    Field,
    Header,
    HeaderText,
    HeaderTitle,
    Wrapper,
} from "./styles";

import BackButton from "../../components/BackButton";
import { Input } from "../../components/Input";
import FieldToggle from "../../components/FieldToggle";

export default function Settings() {
  const navigation = useNavigation<any>();

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

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
           <FieldToggle
             fieldName="Total"
             isEnabled={isEnabled}
             setIsEnabled={setIsEnabled}
           />
          </Wrapper>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}