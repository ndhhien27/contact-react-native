import React, { useContext, useState } from 'react'
import {
    Text,
    Button,
    TextInput,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'

import man from '../assets/man.png';

import { ContactContext } from '../Contexts/ContactContext'


export default function AddContact() {

    const { addContact } = useContext(ContactContext)
    const [contact, setContact] = useState({
        name: '',
        phone: ''
    })
    const onHadleChange = (event) => console.log(event)

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View key='1' style={{ alignItems: 'center', marginTop: 16 }}>
                <Image source={man} style={styles.image} />
            </View>
            <View>
                <View style={styles.field}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Name'
                    />
                </View>
                <View style={styles.field}>
                    <TextInput
                        style={styles.textInput}
                        textContentType='telephoneNumber'
                        placeholder='Phone'
                    />
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.addBtn}
            >
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 24 }}>Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

AddContact.navigationOptions = () => ({
    title: 'Add Contact',
    headerRight: (
        <Button
            title='Add'
        />
    )
})

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        fontSize: 24,
        height: 40,
        flex: 1
    },
    image: {
        width: 240,
        height: 240,
    },

    container: {
        marginTop: 16,
        paddingHorizontal: 16
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    label: {
        marginRight: 8,
        overflow: 'hidden'
    },
    addBtn: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#428AF8',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#fff'
    }
})