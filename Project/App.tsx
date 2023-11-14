import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import Cesta from './src/pages/cesta/Cesta'
import mockCesta from './src/mocks/cesta'
import mockCesta2 from './src/mocks/cesta2'

function App(): JSX.Element {
  return (
    <>
      <SafeAreaView >
        <StatusBar />
        <ScrollView>

          <Cesta {... mockCesta} />
          <Cesta {... mockCesta2} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default App
