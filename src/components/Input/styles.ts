import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons'; 

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor: '#585757'
})) <Props>`
  width: 100%;
  background-color: transparent;
  border-radius: 2px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TEXT};
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
    color: '#585757';
  `};
`;

export const Content = styled.View`
  width:92%;
  flex-direction: row;
  align-items: center;
`;

export const IconName = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const IconPrice = styled(Ionicons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;
