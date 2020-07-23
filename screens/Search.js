import * as React from 'react';
import {Appbar, Title, TextInput} from 'react-native-paper';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Header from './Header';

const Search = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.SearchText}>Let's see which City is more Comfy.</Text>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Search the City"
          theme={{
            colors: {
              primary: 'transparent',
            },
          }}
          mode="outlined"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingTop: 25,
  },
  SearchText: {
    color: '#b8b8b8',
    fontSize: 14,
    paddingLeft: 5,
  },
  input: {
    backgroundColor: '#0619ab',
    borderWidth: 0,
    borderRadius: 40,
    width: Dimensions.get('screen').width - 50,
  },
  InputContainer: {
    borderRadius: 50,
    justifyContent: 'center',
  },
});

export default Search;
