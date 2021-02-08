import * as React from 'react';
import {View, StyleSheet, FlatList, ListRenderItemInfo} from 'react-native';
import {useState} from "react";
import {BookItem, BookItemProps} from "../components/BookItem";

export const BooksList = () => {
    const [books, setBooks] = useState(require('../../public/BooksList.json').books);
    const renderItem = ({ item:{ title, subtitle, image, price } }: ListRenderItemInfo<BookItemProps>) =>
        <BookItem title={title} subtitle={subtitle} image={image} price={price}/>
    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
