import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { rootNavigation } from './utility/navigation.js'
import AppNavigator from './navigators/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <>
    <NavigationContainer ref={rootNavigation}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}

