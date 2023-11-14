import React from 'react'
import { StyleSheet, View } from 'react-native'
import Top from './components/Top'

import FontText from '../../components/FontText'
import Details from './components/Details'
import Itens from './components/Itens'

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <Top {...topo}/>
      <View style={styles.cestaView}>
        <Details {...detalhes} />
        <FontText style={styles.title}>{ itens.titulo }</FontText>
        <Itens {...itens}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  cestaView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})