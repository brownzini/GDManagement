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
    height: ${RFPercentage(35)}px;
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

export const CardHeader = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_PRODUCT_CARD,
  start: { x: 0, y: 0.5 },
  end: { x: 0, y: 1 }
}))`
  width: 80%;
  height: ${RFPercentage(24)}px;
  margin-top: ${RFPercentage(25)}px;
  border-radius: ${RFPercentage(2)}px;
  position: absolute;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const ContentArea = styled.View`
  flex: 1;
  max-width:50%;
  height:80%;
  flex-direction: column;
  margin-left: ${RFPercentage(2)}px;
  align-items: center;
`;

export const ContentAreaTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.TITLE};
    margin-bottom: ${RFPercentage(2)}px;
    font-weight: 800;
`;

export const WrapperButton = styled.View`
    width:85%;
    height: ${RFPercentage(25)}px;
`;

export const ImageArea = styled.View`
   left: 61%;
   top: ${RFPercentage(3)}px;
   position: absolute;
`;

export const Image = styled.Image`
   transform: rotate(10deg);
`;

