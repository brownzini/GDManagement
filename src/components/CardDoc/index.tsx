import React from 'react';

import { 
  CardBody,
  CardDescription,
  CardTitle,
  Container, 
  HeaderTitle,
} from './styles';

interface DocCardProp {
  id?:string;
  title:string; 
  description: string;
};

interface Props {
  data: DocCardProp;
}

export default function CardDoc ({ data }:Props){
 return (
   <Container>
    <HeaderTitle>
      <CardTitle> {data.title} </CardTitle>
    </HeaderTitle>
    <CardBody>
      <CardDescription> "{data.description}" </CardDescription>
    </CardBody>
   </Container>
 )
}

