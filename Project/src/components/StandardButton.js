import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import FontText from './FontText'

export default function StandardButton( {text, onPress} ) {
    return(
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <FontText style={styles.buttonText}>{text}</FontText>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
      },
      buttonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
      }
})