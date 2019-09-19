import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ContactImg(props) {
    const { name, style } = props

    // getBackgroundColor = () => (
    //     '#' + Math.floor(Math.random() * 16777215).toString(16)
    // )

    return (
        <View style={[style, styles.container, { borderRadius: style.width / 2 }]}>
            <Text style={[styles.text, { fontSize: style.width / 2 }]}>
                {name.charAt(0)}
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ec1d3'
    },
    text: {
        color: '#fff'
    }
})