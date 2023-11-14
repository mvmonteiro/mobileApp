import React from 'react'
import { StyleSheet, View } from 'react-native'
import Top from './components/Top'

import Details from './components/Details'

export default function Cesta({ topo, detalhes }) {
  return (
    <>
      <Top {...topo} />

      <View style={styles.cestaView}>
        <Details {...detalhes} />
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  cestaView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})