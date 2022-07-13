import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";
interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color}
      />
    </Container>
  );
};

export default BackButton;