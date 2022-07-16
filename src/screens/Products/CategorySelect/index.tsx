import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../../components/Button";
import { Categories } from "../../../utils/Data";
import months from '../../../utils/months';

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
    type?: string;
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory,
    type,
}: Props) {
    function handleCategorySeletc(category: Category){
        setCategory(category);
    }
    return (
        <Container>
            <Header>
                <Title>{(type === 'primary') ? 'Category' : 'Month'}</Title>
            </Header>
            <FlatList
                data={(type === 'primary') ? Categories : months}
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
                    title="Select"
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
    )
}