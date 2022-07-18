import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

import { RFValue } from "react-native-responsive-fontsize";

import { Foundation } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
interface Props extends RectButtonProps {
    children: React.ReactNode;
}
interface ReviewProps {
    firstActive?: boolean;
    secondActive?: boolean;
    thirdActive?: boolean;
    fourthActive?: boolean;
}

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_HOME,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  justify-content: flex-start;
  padding: 32px 24px;
`;

export const Header = styled.View`
    width: 100%;
    height:115px;
    margin-top:${RFValue(24)}px;
    background-color: '#8E2DE2';
    justify-content: flex-end;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ImageContent = styled.View` 
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 5px;
`;

export const LastProductsContent = styled.View`
    margin-top: 10%;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const LastProductsBody = styled.View`
    height: ${RFValue(100)}px;
    margin-top:2.5%;
    border-radius:20px;
    padding: 20px 10px;
    border-bottom-width:5px;
    border-left-width:2px;
    border-right-width:2px;
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
    justify-content: center;
    align-items: center;
`;

export const LastProductsBodyContent = styled.View`
    flex-direction: row;
`;

export const Item = styled.View`
    background-color:${({ theme }) => theme.COLORS.TITLE};
    width:50px;
    height: ${RFValue(50)}px;
    border-radius:100px;
    margin:10px;
    margin-top:0px;
    justify-content: center;
    align-items: center;
`;

export const ReviewTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
    margin-top: ${RFValue(30)}px;
`;

export const ButtonContent = styled(RectButton)<Props>`
    width:100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ReviewContent = styled.View`
    width:100%;
    height: ${RFValue(50)}px;
`;

export const ReviewContent2 = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ButtonContent2 = styled(RectButton)<Props>`
    width: ${RFValue(165)}px;
    height: ${RFValue(70)}px;
    justify-content: center;
    align-items: center;
`;

export const ReviewBody = styled.View`
    flex:1;
    flex-direction:row;
    margin-top: ${RFValue(20)}px;
    flex-wrap: wrap;
`;

export const ReviewFirst = styled.View`
    width:45%;
    height:100px;
    border-width: 1px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-radius:1px;
    border-radius: 5px;
    margin-left: 5px;
    margin-bottom:5px;
    flex-direction: column;
`;

export const ReviewWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 18px 0px;
`;

export const ReviewMoney = styled.Text`
    padding: 0 12px;
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
    text-align: center;
`;

export const ReviewMoneyTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ReviewSecond = styled.View<ReviewProps>`
    width: ${({ theme, firstActive }) => firstActive ? '50%' : '100%'};
    height: ${({ theme, fourthActive }) => fourthActive ? '60px' : '100px'};
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-radius: 5px;
    margin-top:0px;
    margin-left:5px;
    padding: 10px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ theme, firstActive }) => firstActive ? '0px' : '10px'};
`;

export const ReviewStatisticsTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ButtonContent3 = styled(RectButton)<Props>`
    width: ${RFValue(150)}px;
    height: ${RFValue(60)}px;
    justify-content: center;
    align-items: center;
`;

export const ReviewThird = styled.View<ReviewProps>`
    width: ${({ theme, firstActive, secondActive, fourthActive }) => firstActive && fourthActive && !secondActive  ? '50%' : '45%'};
    height: ${({ theme, firstActive, secondActive, fourthActive }) => firstActive && fourthActive && !secondActive ? '100px' : '60px'};
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-radius: 5px;
    margin-left: ${({ theme, fourthActive, secondActive }) => (fourthActive && secondActive) ? '5px' : '8px'};
    justify-content: center;
    align-items: center;
    margin-bottom: ${({ theme, firstActive, secondActive }) => (firstActive && secondActive) ? '0px' : '10px'};
`;

export const ReviewWrapperSettings = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ReviewSettingsTitle = styled.Text`
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ReviewFourth = styled.View<ReviewProps>`
    width: ${({ theme, secondActive }) => secondActive ? '50%' : '97%'};
    height:${({ theme, secondActive }) => secondActive ? '100px' : '75px'};
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-radius: 5px;

    ${({ theme, firstActive, secondActive }) => css`
        margin-top: ${RFValue(firstActive && secondActive ? -43 : 0)}px;
    `};

    margin-left: ${({ theme, firstActive }) => firstActive ? '5px' : '10px'};
    align-items: center;
    justify-content: center;
`;

export const ReviewWrapperProducts = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ReviewProductsTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ReviewProductsTotal = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
    text-align: center;
`;

export const Icon = styled(Foundation)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Icon2 = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Icon3 = styled(EvilIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Brand = styled.Image.attrs({
    resizeMode: 'contain'
  })`
    margin-top: 0px;
`;

export const ErrorMessage = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};   
`;