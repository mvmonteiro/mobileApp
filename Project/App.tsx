import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import Cesta from './src/pages/cesta/Cesta'
import mockCesta from './src/mocks/cesta'

function App(): JSX.Element {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
          <ScrollView>
            <Cesta {... mockCesta} />
          </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App
