import React from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

import man from '../assets/man.png'
import ContactImg from '../components/ContactImg'

export default function Contact(props) {

    const { navigation } = props
    const name = navigation.getParam('contactName'),
        phone = navigation.getParam('contactPhone')
    return [
        <View key='1' style={{ alignItems: "center", marginTop: 16 }} >
            <ContactImg name={name} style={{ width: 240, height: 240 }} />
        </View>,
        <View key='2' style={styles.container}>
            <TextInput
                defaultValue={name}
                style={styles.textInput}
            />
            <TextInput
                defaultValue={phone}
                style={styles.textInput}
            />
        </View>]

}

Contact.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('contactName'),
    headerRight: (
        <Button title='Save' />
    )
})

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'black',
        fontSize: 32,
        marginBottom: 16,
        paddingBottom: 8
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