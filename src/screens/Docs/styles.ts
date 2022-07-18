import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_HEADER_DOCS,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.COLORS_SELECT.primary};
  align-items: center;
  justify-content: center;
  padding-bottom: 19px;
`;

export const HeaderContent = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImageItem = styled.Image``;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.SECONDARY_500};
    font-weight: bold;
`;
