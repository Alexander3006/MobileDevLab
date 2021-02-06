import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import {About} from "./pages/About";

const App = () => {
  const [index, setIndex] = React.useState(0);
  const routes =[
    {key: 'about', title: 'About'},
  ];

  const renderScene = BottomNavigation.SceneMap({
    about: About,
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
