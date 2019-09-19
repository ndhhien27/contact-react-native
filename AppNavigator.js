import { createStackNavigator } from 'react-navigation-stack'

import ContactList from './screens/ContactList';
import Contact from './screens/Contact';
import AddContact from './screens/AddContact';

const AppNavigator = createStackNavigator({
    ContactList: {
        screen: ContactList
    },
    Contact: {
        screen: Contact
    },
    AddContact: AddContact
})

export default AppNavigator