import React, { useState, useContext } from 'react';
import { FlatList, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg'

import ContactListItem from '../components/ContactListItem';
import { ContactContext } from '../Contexts/ContactContext'
import search from '../assets/search.png'

import addBtn from '../assets/add.png';

export default function ContactList(props) {

    const { contacts } = useContext(ContactContext)

    // const [contacts, setContacts] = useState(initialContacts)

    const { navigation } = props

    return (
        <View style={styles.wrapper}>
            <View style={[styles.search]}>
                <Image source={search} style={{ width: 32, height: 32 }} />
                <TextInput
                    style={{ marginLeft: 16, fontSize: 24, flex: 1 }}
                    placeholder='Search'
                />
            </View>
            <FlatList
                data={contacts}
                renderItem={({ item }) =>
                    <ContactListItem
                        contact={item}
                        onPress={() => navigation.navigate('Contact', {
                            contactName: item.name,
                            contactPhone: item.phone
                        })}
                    />}
                keyExtractor={item => `contact-${item.id}`}
            >
            </FlatList>
            <View style={{
                marginBottom: 40,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flex: 1
            }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('AddContact')}
                >
                    <Image source={addBtn} style={styles.addBtn} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     paddingHorizontal: 16,
    //     marginTop: 8
    // },
    addBtn: {
        width: 48,
        height: 48
    },
    search: {
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        padding: 4,
        borderRadius: 10,
        paddingLeft: 16
    },
    wrapper: {
        paddingHorizontal: 16,
        marginTop: 8,
        flex: 1
    }
})

ContactList.navigationOptions = {
    title: 'Contacts'
}