import React from 'react';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './AppNavigator';
import ContactProvider from './Contexts/ContactContext'
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ContactProvider>
      <AppContainer />
    </ContactProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
