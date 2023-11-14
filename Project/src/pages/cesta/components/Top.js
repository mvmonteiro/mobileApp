import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'
import FontText from '../../../components/FontText'

import imgTop from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Top({ titulo }) {
    return(
        <>
            <Image source={imgTop} style={styles.imgTop}/>
            <FontText style={styles.title}>{titulo}</FontText>
        </>
    )
}

const styles = StyleSheet.create({
    imgTop:{
        width: "100%",
        height: 578/768 * width
      },
      title: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
      },
})