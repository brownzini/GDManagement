import React, { useState } from 'react';
import { Switch } from 'react-native';

import { 
  Container, 
  WrapperTitle,
} from './styles';

interface Props {
    fieldName: string;
    isEnabled: boolean;
    setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FieldToggle ({
    fieldName,
    isEnabled,
    setIsEnabled,
}:Props){
 const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 return (
    <Container>
      <WrapperTitle> {fieldName} </WrapperTitle>
      <Switch
        trackColor={{ false: "#D298FF", true: "#A737FF" }}
        thumbColor={isEnabled ? "#E3BFFF" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
 )
}