import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_SIGNIN,
  start: { x: 0, y: 1 },
  end: { x: 0.2, y: 0.5 }
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 32px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `};
  font-weight:bold;
  text-align:center;
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 340px;
  align-self: center;
`;

export const Header = styled.View`
   flex:1;
   flex-direction:row;
   justify-content:center;
   align-items:center;
   margin-top:25%;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `};
  align-self: center;
  font-weight:bold;
  margin-bottom: 24px;
`;
