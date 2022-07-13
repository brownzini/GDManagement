import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_PRODUCT_HEADER,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
    width: 100%;
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-top: ${Platform.OS === 'ios' ? 0 : 26}px;
`;

export const HeaderTitle = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 50px 30px;
    justify-content: space-between;
`;

export const HeaderText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const CardHeader = styled.View``;