import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import ContactListItem from '../components/ContactListItem';

import addBtn from '../assets/add.png';

export default function ContactList(props) {

    const initialContacts = [
        { id: 1, name: 'Nguyen Duc Hien', phone: '0964581619' },
        { id: 2, name: 'Đặng Xuân Thắng', phone: '0964581619' },
        { id: 3, name: 'Hiển Nguyễn Đứcccccccccccc', phone: '0964581619' },
        { id: 4, name: 'Alan Turing', phone: '312093813' },
        { id: 5, name: 'Tim Cook', phone: '123192030' },
    ]

    const [contacts, setContacts] = useState(initialContacts)

    const { navigation } = props

    return (
        [
            <FlatList key='1'
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
                contentContainerStyle={styles.container}
            >
            </FlatList>,
            <View key='2' style={{ alignItems: 'flex-end', paddingRight: 16, paddingBottom: 16 }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('AddContact')}
                >
                    <Image source={addBtn} style={styles.addBtn} />
                </TouchableOpacity>
            </View>
        ]
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: 8
    },
    addBtn: {
        width: 48,
        height: 48
    }
})

ContactList.navigationOptions = {
    title: 'Contacts'
}