import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-top: ${Platform.OS === 'ios' ? 0 : 26}px;
`;

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 50px 30px;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.ALERT_800};
`;

export const ButtonBack = styled.TouchableOpacity`
    width: ${RFPercentage(20)}px;
`;

export const GraficContainer = styled.View`
    flex:1;
    margin-bottom: 15%;
    flex-direction: row;
`;

export const GraficContent = styled.View`
    width:60%;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    align-items: flex-end;
`;

export const DetailsContent = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const DetailsArea = styled.View`
    width:100%;
    height:100%;
`;

export const FieldsContainer = styled.View`
    flex:1;
    flex-direction:row;
    align-items: center;
    margin-bottom: 15px;
`;

export const FieldColor = styled.View`
    width:10%;
    height:50%;
    background-color:gray;
    border-radius:2px;
    margin-right:2px;
`;

export const FieldText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.ALERT_800};
`;

export const Footer = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_PRODUCT_HEADER,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
    width: 100%;
    height: ${RFPercentage(20)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: ${Platform.OS === 'ios' ? 0 : 0}px;
`;

export const WrapperButton = styled.View`
    width:80%;
`;