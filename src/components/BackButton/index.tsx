import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";
interface Props extends RectButtonProps {
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