import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_PRODUCT_HEADER,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`

    height: ${RFPercentage(50)}px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-top: ${Platform.OS === 'ios' ? 0 : 26}px;
`;

export const HeaderTitle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${RFPercentage(33)}px;
`;

export const HeaderText = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px 0px;
  justify-content: flex-start;
  align-items: center;
`;

export const Field = styled.View`
  width:95%;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmArea = styled.View`
  width: 100%;
  justify-content: flex-start;
  padding: 100px 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: center;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `};
  font-weight:bold;
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 32px;
  align-self: center;
`;
