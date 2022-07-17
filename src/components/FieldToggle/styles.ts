import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const WrapperTitle = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.ALERT_800};
`;

export const Field = styled.View`
  width:95%;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  width:100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
`;