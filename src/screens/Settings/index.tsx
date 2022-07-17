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
    FieldToggle,
    WrapperTitle, 
} from "./styles";

import BackButton from "../../components/BackButton";
import { Input } from "../../components/Input";

export default function Settings() {
  const navigation = useNavigation<any>();

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
           <FieldToggle>
              <WrapperTitle> Total Field </WrapperTitle>
              <Switch
                trackColor={{ false: "#D298FF", true: "#A737FF" }}
                thumbColor={isEnabled ? "#E3BFFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
           </FieldToggle>
           <FieldToggle>
              <WrapperTitle> Settings Field </WrapperTitle>
              <Switch
                trackColor={{ false: "#D298FF", true: "#A737FF" }}
                thumbColor={isEnabled ? "#E3BFFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
           </FieldToggle>
           <FieldToggle>
              <WrapperTitle> Statics Field </WrapperTitle>
              <Switch
                trackColor={{ false: "#D298FF", true: "#A737FF" }}
                thumbColor={isEnabled ? "#E3BFFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
           </FieldToggle>
           <FieldToggle>
              <WrapperTitle> Products Field </WrapperTitle>
              <Switch
                trackColor={{ false: "#D298FF", true: "#A737FF" }}
                thumbColor={isEnabled ? "#E3BFFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
           </FieldToggle>
          </Wrapper>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}