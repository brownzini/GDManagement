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
    ContentHeader,
    Actions,
    EditContainer,
    ButtonContentEditar,
    ButtonContentDelete,
    EditIcon,
    DeleteIcon,
} from './styles';

import { GetIconsCategory } from "../../utils/Categories";

export interface ProductsCardProps {
    name: string;
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
        <ContentHeader>

          <NameContainer>
            <Title> {data.name} </Title>
          </NameContainer>
          <Actions>
           <EditContainer>
            <ButtonContentEditar>
              <EditIcon name="edit" size={20} color="#fff" />  
            </ButtonContentEditar>
           </EditContainer>
            <ButtonContentDelete>
              <DeleteIcon name="delete" size={20} color="#fff" />  
            </ButtonContentDelete>
          </Actions>
        </ContentHeader>

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