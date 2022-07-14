import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import { 
  RFPercentage, 
  RFValue 
} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

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
    padding: 50px 15px;
    justify-content: space-between;
`;

export const HeaderText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const CardHeader = styled.View`
    background-color: ${({ theme }) => theme.COLORS.TITLE};
    width: 90%;
    height: ${RFPercentage(65)}px;
    margin-top: ${RFPercentage(25)}px;
    border-radius: ${RFPercentage(1)}px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

export const HeaderLabel = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    margin-bottom: 5px;
`;

export const ContentArea = styled.View`
  flex: 1;
  padding: 0px 10px;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding: 50px 10px;
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

export const ProductsCardContent = styled.View`
    flex: 1%;
    padding: 0 24px;
    margin-top: ${RFPercentage(17)}px;
`;

export const WrapperContent = styled.View`
    flex: 1;
`;

export const SelectContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
    align-items: center;
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Field = styled.View`
  margin-bottom: ${RFPercentage(2.5)}px;
`;

export const ButtonSelect = styled.TouchableOpacity``;