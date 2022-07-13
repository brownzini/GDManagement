import styled, { css } from "styled-components/native";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";
export type TypeProps = 'primary' | 'secondary';

interface ContainerProps extends RectButtonProps {
  type: TypeProps;
  children?: React.ReactNode;
}
interface TitleProps {
  type: TypeProps;  
}

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.PRIMARY_800 : theme.COLORS.TITLE};
`;

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.TITLE : theme.COLORS.SECONDARY_500};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE
}))``;