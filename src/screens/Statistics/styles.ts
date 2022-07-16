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
    background-color:blue;
    flex-direction: row;
`;

export const GraficContent = styled.View`
    width:70%;
    background-color:green;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    width:100%;
    height:50%;
    background-color:red;
`;

export const DetailsContent = styled.View`
    flex:1;
    background-color:yellow;
    justify-content: center;
    align-items: center;
`;

export const DetailsArea = styled.View`
    width:100%;
    height:50%;
    background-color:blue;
`;
