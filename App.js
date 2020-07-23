import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import Search from './screens/Search';

const App = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="light-content" backgroundColor="#040814" />
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#040814',
  },
});

export default App;
