import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#040814',
        },
      }}
      style={styles.container}>
      <Title style={styles.Title}>Weather Search</Title>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  Title: {
    fontSize: 24,
    color: 'white',
  },
});

export default Header;
