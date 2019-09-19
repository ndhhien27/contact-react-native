import React, { createContext, useState } from "react";

export const ContactContext = createContext();

export default function ContactProvider(props) {

    const initialContacts = [
        { id: 1, name: 'Nguyen Duc Hien', phone: '0964581619' },
        { id: 2, name: 'Đặng Xuân Thắng', phone: '0964581619' },
        { id: 3, name: 'Hiển Nguyễn Đứcccccccccccc', phone: '0964581619' },
        { id: 4, name: 'Alan Turing', phone: '312093813' },
        { id: 5, name: 'Tim Cook', phone: '123192030' },
        { id: 6, name: 'Vo Trung', phone: '3120391238' },
    ]

    const [contacts, setContacts] = useState(initialContacts);


    // functional setState
    // const randomNumber = () => {
    //   setNumber(prevNumber =>{
    //     return prevNumber + 1
    //   });
    //   setNumber(prevNumber =>{
    //     return prevNumber + 1
    //   });
    // };

    const addContact = (contact) => {
        setContacts([
            ...contacts,
            {
                id: contacts.length + 1,
                ...contact
            }
        ])
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: contacts,
                addContact: addContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
}
