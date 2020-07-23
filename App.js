import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {Header} from './screens/Header';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00aaff" />
      <Header />
      <Text>Hello</Text>
    </>
  );
};

export default App;
