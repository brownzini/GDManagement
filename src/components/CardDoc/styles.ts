import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  height: 90px;
  border-radius:4px;
  margin-top:10px;
  border-bottom-width:3px;
  border-bottom-color:gray;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  padding: 5px 0px;
`;

export const CardTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: ${RFValue(18)}px;
    text-align:center;
    font-style: italic;
`;

export const CardBody = styled.View`
    flex:1;
`;

export const CardDescription = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: ${RFValue(16)}px; 
    color: ${({ theme }) => theme.COLORS.ALERT_800};
    text-align:center;
`;
