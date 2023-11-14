import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import FontText from '../../../components/FontText'

export default function Details({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return(
        <>
            <FontText style={styles.session}>{nome}</FontText>
            <View style={styles.resaleView}>
              <Image source={logoFazenda} style={styles.imgResale} />
              <FontText style={styles.resale}>{nomeFazenda}</FontText>
            </View>
            <FontText style={styles.description}>{descricao}</FontText>
            <FontText style={styles.price}>{preco}</FontText>
        </>
    )
}

const styles = StyleSheet.create({
    session: {
      color: "#464646",
      fontSize: 26,
      lineHeight: 42,
      fontWeight: "bold"
    },
    resaleView:{
      flexDirection: "row",
      paddingVertical: 12,
    },
    imgResale: {
      width: 32,
      height: 32
    },
    resale: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
    },
    description: {
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26
    },
    price: {
      color: "#2A9F85",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42,
      marginTop: 8
    }
  })