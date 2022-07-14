import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Props extends RectButtonProps {
    children: React.ReactNode;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.TITLE};
    border-radius: 5px;
    padding: 24px 17px;
    margin-bottom: 16px;
    border-radius: 5px;
    border-bottom-width:5px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
`;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const NameContainer = styled.View`
    height:18px;
`;

export const Image = styled.Image``;

export const PriceContainer = styled.Text`
    flex-direction: row;
    align-items: center;
    font-size: ${RFValue(24)}px;
`;

export const DateContainer = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: 5%;
`;

export const ContentHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Actions = styled.View`
    flex-direction: row;
`;

export const ButtonContentEditar = styled(RectButton)<Props>`
    justify-content: center;
    align-items: center;
`;

export const EditContainer = styled.View`
    margin-right: 10px;
`;

export const ButtonContentDelete = styled(RectButton)<Props>`
    justify-content: center;
    align-items: center;
`;

export const EditIcon = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.ALERT_800};
`;

export const DeleteIcon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.ALERT_50};
`;