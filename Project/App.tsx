import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/pages/Cesta';

function App(): JSX.Element {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text>Olá mundo</Text>
        <Cesta />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
