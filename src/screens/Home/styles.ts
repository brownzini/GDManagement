import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { RFValue } from "react-native-responsive-fontsize";

import { Foundation } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

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
    background-color: red;
    height:100%;
    width: 20%;
    border-radius: 10px;
`;

export const LastProcutsContent = styled.View`
    margin-top: 10%;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const LastProcutsBody = styled.View`
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

export const LastProcutsBodyContent = styled.View`
    flex-direction: row;
`;

export const Item = styled.View`
    background-color:white;
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

export const ReviewContent = styled.View`
    width:100%;
    height: ${RFValue(50)}px;
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
    justify-content: center;
`;

export const ReviewWrapper = styled.View`
  align-items: center;
`;

export const ReviewMoney = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
    text-align: center;
`;

export const ReviewMoneyTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ReviewSecond = styled.View`
    width:50%;
    height:60px;
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
`;

export const ReviewStatisticsTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.PRIMARY_50};
`;

export const ReviewThird = styled.View`
    width:45%;
    height:60px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-radius: 5px;
    margin-left:5px;
    justify-content: center;
    align-items: center;
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

export const ReviewFourth = styled.View`
    width:50%;
    height:100px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-radius: 5px;
    margin-top: ${RFValue(-42)}px; 
    margin-left:5px;
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