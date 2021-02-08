import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { BooksImages } from "../../public/images";

export interface  BookItemProps {
    title: string;
    subtitle: string;
    price: string;
    image: string;
}

export const BookItem = ({title, subtitle, price, image}: BookItemProps) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={BooksImages[image]}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 container: {
     flex: 1,
     display: "flex",
     flexDirection: "row",
     padding: 10,
     borderBottomWidth: 1
 },
    textContainer: {
     flex: 1,
     display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 10,
    },
    title: {
     fontSize: 16,
     fontWeight: "bold"
    },
    subtitle: {
        fontStyle: "italic"
    },
    price: {
        fontWeight: "bold",
    },
    image: {
        height: 100,
        width: 100,
    }
})
