import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    /*must use flex 1 all the way up the component tree to fill screen */
    <SafeAreaView style={styles.SafeArea}>
      {/*convert styles prop to array and pass in more styles if needed s they are reusable*/}
      <View style={styles.container}>
        <Text style={styles.headingText}>Here are some boxes of text</Text>
        <Box color={'#2aa197'} text={'Cyan #2aa198'} />
        <Box color={'#268bd1'} text={'Blue #268bd2'} />
        <Box color={'#d33682'} text={'Magenta #d33682'} />
        <Box color={'#cb4b16'} text={'Orange #cb4b16'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },
  SafeArea: {
    flex: 1,
  },
  container: {
    flex: 1, // flex 1 fills full screen
    // padding
    marginTop: 40,
    paddingVertical: 10, // styles dont have units!
    paddingHorizontal: 10,
  },
});

export default App;
