import React from "react";
import { 
  KeyboardAvoidingView, 
  Platform,  
}
 from "react-native";

import { useNavigation } from '@react-navigation/native';

import { 
  ConfirmArea,
    Container, 
    Content,
    Header,
    HeaderText,
    HeaderTitle,
    Wrapper,
} from "./styles";

import FieldToggle from "../../components/FieldToggle";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export default function Settings() {
  const navigation = useNavigation<any>();

  const { 
    isEnabledTotal, setIsEnabledTotal,
    isEnabledStatistics, setIsEnabledStatistics,
    isEnabledProducts, setIsEnabledProducts,
  } = useAuth();

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header>
          <HeaderTitle>
            <HeaderText> Settings </HeaderText>
          </HeaderTitle>
        </Header>
        <Content>
          <Wrapper>
           <FieldToggle
             fieldName="Total"
             isEnabled={isEnabledTotal}
             setIsEnabled={setIsEnabledTotal}
           />
           <FieldToggle
             fieldName="Statistics"
             isEnabled={isEnabledStatistics}
             setIsEnabled={setIsEnabledStatistics}
           />
           <FieldToggle
             fieldName="Products"
             isEnabled={isEnabledProducts}
             setIsEnabled={setIsEnabledProducts}
           />
          <ConfirmArea> 
            <Button
              title="Back"
              type="primary"
              onPress={() => navigation.goBack()}
            />
          </ConfirmArea>
          </Wrapper>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}