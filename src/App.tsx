import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import {About} from "./pages/About";
import {Graphics} from "./pages/Graphics";
import {BooksList} from "./pages/BooksList";

const App = () => {
  const [index, setIndex] = React.useState(0);
  const routes =[
      {key: 'about', title: 'About', icon: require('../public/icons/about-icon.png')},
      {key: 'graphics', title: 'Graphics', icon: require('../public/icons/graphics-icon.png')},
      {key: 'books', title: 'Books', icon: require('../public/icons/book-icon.png')},
  ];

  const renderScene = BottomNavigation.SceneMap({
      about: About,
      graphics: Graphics,
      books: BooksList,
  });

  return (
      <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle = {{
            backgroundColor: 'purple',
          }}
      />
  );
};

export default App;
