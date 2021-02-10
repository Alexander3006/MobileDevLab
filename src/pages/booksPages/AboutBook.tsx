import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BooksImages} from '../../../public/images';
import {books} from '../../../public/books';

export const AboutBook = ({route}: any) => {
  const {isbn13} = route.params;
  const book = books[isbn13] ?? {};
  const {
    title,
    subtitle,
    authors,
    publisher,
    pages,
    year,
    rating,
    desc,
    price,
    image,
  } = book;
  const img = BooksImages[image];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={img} />
      </View>
      <View style={styles.textGroup}>
        <Text>{`Title: ${title ?? ''}`}</Text>
        <Text>{`Subtitle: ${subtitle ?? ''}`}</Text>
        <Text>{`Desc: ${desc ?? ''}`}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text>{`Authors: ${authors ?? ''}`}</Text>
        <Text>{`Publisher: ${publisher ?? ''}`}</Text>
      </View>
      <View style={styles.textGroup}>
        <Text>{`Pages: ${pages ?? ''}`}</Text>
        <Text>{`Year: ${year ?? ''}`}</Text>
        <Text>{`Rating: ${rating ?? ''}`}</Text>
        <Text>{`Price: ${price ?? ''}`}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textGroup: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  image: {
    height: 300,
    width: 300,
  },
});
