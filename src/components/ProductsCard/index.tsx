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
import { useNavigation } from "@react-navigation/native";
import { useProduct } from "../../hooks/product";
export interface ProductsCardProps {
  id?:string;
  category: string;
  date: string;
  name: string;
  price: number;
}
interface Props {
    data: ProductsCardProps;
}

export function ProductsCard({ data }: Props) {
    
    const navigation = useNavigation<any>();
    const { deleteProduct } = useProduct();

    return (
      <Container>
        <ContentHeader>
          <NameContainer>
            <Title> {data.name} </Title>
          </NameContainer>
          <Actions>
           <EditContainer>
            <ButtonContentEditar onPress={() => navigation.navigate("UpdateProducts", {
              data: data,
            })}>
              <EditIcon name="edit" size={20} color="#fff" />  
            </ButtonContentEditar>
           </EditContainer>
            <ButtonContentDelete onPress={() => deleteProduct(data.id)}>
              <DeleteIcon name="delete" size={20} color="#fff" />  
            </ButtonContentDelete>
          </Actions>
        </ContentHeader>
        <Content>
          <PriceContainer> $ {data.price} </PriceContainer>
          <Image source={GetIconsCategory(data.category)} />
        </Content>
        <DateContainer>
          <Date> Created At - {data.date} </Date>
        </DateContainer>
      </Container>
    )
}