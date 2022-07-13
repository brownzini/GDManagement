import React from "react";

import {
    Container,
    Date,
    Content,
    Title,
    DateContainer,
    Image,
    PriceContainer,
    NameContainer,
} from './styles';

import { GetIconsCategory } from "../../utils/Categories";

export interface ProductsCardProps {
    name: string;
    img: string;
    date: string;
    price: string;
    category:string;
}

interface Props {
    data: ProductsCardProps;
}

export function ProductsCard({ data }: Props) {
    return (
      <Container>
        <NameContainer>
          <Title> {data.name} </Title>
        </NameContainer>
        <Content>
          <PriceContainer> {data.price} </PriceContainer>
          <Image source={GetIconsCategory(data.category)} />
        </Content>
        <DateContainer>
          <Date> Created At: {data.date} </Date>
        </DateContainer>
      </Container>
    )
}