import React from 'react';
import { TextInputProps } from 'react-native';

import { 
    Container, 
    Content, 
    IconName, 
    IconPrice, 
    TypeProps 
} from './styles';

type Props = TextInputProps & {
  type?: TypeProps;
}

export function Input({ type = 'primary', ...rest }: Props) {
  return (
    <Content>
     <Container type={type} {...rest} />
     {(type === 'primary')  
            ? ( <IconName name="drive-file-rename-outline" /> )
            : ( <IconPrice name="pricetags-outline" /> )}
    </Content>
  )
}