import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../../components/Button";
import { Categories } from "../../../utils/Data";

import {
    Container,
    Header,
    Title,
    Category,
    Name,
    Separator,
    Footer
} from './styles'

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {
    function handleCategorySeletc(category: Category){
        setCategory(category);
    }
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
            <FlatList
                data={Categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handleCategorySeletc(item)}
                        isActive={category.key === item.key}
                    >
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button
                    title="Selecionar"
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
    )
}