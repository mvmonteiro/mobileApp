import React from 'react'
import FontText from '../../../components/FontText'
import { Image, StyleSheet, View } from 'react-native'

export default function Itens( { lista } ) {
    return(
        <>
            {lista.map( (item) => (
                <View key={item.nome} style={styles.item}>
                    <Image source={item.imagem} style={styles.image}/>
                    <FontText style={styles.text}>{item.nome}</FontText>
                </View>
            ))} 
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center"
    },
    image: {
        width: 46,
        height: 46
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})