import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { LinearGradient } from 'expo-linear-gradient';

import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS_SELECT.backgound};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT_PRODUCT_HEADER,
    start: { x: 0, y: 1 },
    end: { x: 0.5, y: 0.5 }
  }))`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({ theme }) => theme.COLORS_SELECT.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS_SELECT.shape};
    font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme, isActive }) => 
        isActive ? theme.COLORS_SELECT.secondary_light : theme.COLORS_SELECT.backgound
    };
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS_SELECT.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 20%;
`;