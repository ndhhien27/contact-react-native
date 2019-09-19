import React from 'react'
import { Text, Button, TextInput, StyleSheet, View, Image } from 'react-native'

import man from '../assets/man.png';

export default function AddContact() {
    return [
        <View key='1' style={{ alignItems: 'center', marginTop: 16 }}>
            <Image source={man} style={styles.image} />
        </View>,
        <View key='2' style={styles.container}>
            <View>
                <Text>NAME:</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View>
                <Text>PHONE:</Text>
                <TextInput style={styles.textInput} textContentType='telephoneNumber' />
            </View>
        </View>
    ]
}

AddContact.navigationOptions = () => ({
    title: 'Add Contact',
    headerRight: (
        <Button title='Save' />
    )
})

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'black',
        fontSize: 32,
    },
    image: {
        width: 240,
        height: 240,
    },

    container: {
        marginTop: 16,
        paddingHorizontal: 16
    }
})