import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="light-content" backgroundColor="#A259FF" translucent> */}
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
