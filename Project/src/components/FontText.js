import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function FontText({ children, style }) {
    let styleWeight = styles.fontRegular
    if (style?.fontWeight === "bold")
        styleWeight = styles.fontBold

    return (
        <Text style={[style, styleWeight]}>
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    fontRegular: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "normal"
    },
    fontBold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: "normal"
    }
})