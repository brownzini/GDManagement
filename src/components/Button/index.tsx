import React from 'react';

import { 
  Container, 
  Title, 
  Load, 
  TypeProps 
} from './styles';

import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
}

export function Button({ 
  title, 
  onPress,
  enabled = true,
  type = 'primary', 
  isLoading = false, 
  ...rest
}: Props) {
  return (
    <Container 
      onPress={onPress}
      type={type} 
      enabled={enabled}
      {...rest}
    >
      {isLoading ? <Load /> : <Title type={type}> {title} </Title>}
    </Container>
  );
};