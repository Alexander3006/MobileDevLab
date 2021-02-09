import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {BookItem, BookItemProps} from '../../components/BookItem';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {Swipeable} from 'react-native-gesture-handler';

export interface BooksListProps {
  books: BookItemProps[];
  navigation: NavigationScreenProp<NavigationState>;
  deleteBook: (index: number) => void;
}

const ListEmpty = (
  <Text style={{textAlign: 'center', marginTop: 20, color: 'grey'}}>
    Books not found
  </Text>
);

const swipeAction = (onPressAction: () => void) => (
  <TouchableOpacity onPress={onPressAction} style={styles.swipeAction}>
    <Text style={{fontWeight: 'bold', fontSize: 16}}>Delete</Text>
  </TouchableOpacity>
);

export const BooksList = ({books, navigation, deleteBook}: BooksListProps) => {
  const [searchState, setSearchState] = useState('');

  let swiped: Array<any> = [];

  const renderItem = ({item, index}: ListRenderItemInfo<BookItemProps>) => {
    const onDelete = () => {
      deleteBook(index);
      swiped[index]?.close();
    };

    return (
      <Swipeable
        friction={2}
        key={index}
        ref={(ref) => (swiped[index] = ref)}
        renderRightActions={() => swipeAction(onDelete)}>
        <TouchableHighlight
          onPress={() => navigation.navigate('AboutBook', {...item})}>
          <BookItem {...item} />
        </TouchableHighlight>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={setSearchState}
        value={searchState}
        placeholder={'Enter title'}
        platform={'android'}
      />
      <FlatList
        data={books.filter(({title}: BookItemProps) =>
          title.toLowerCase().includes(searchState.toLowerCase()),
        )}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeAction: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});
