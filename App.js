import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignupLoginScreen from './Screens/SignupLoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <SignupLoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
