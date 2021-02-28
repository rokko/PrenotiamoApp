import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import { NavigationContainer } from '@react-navigation/native';


const AuthStack = createStackNavigator()

export default function AuthNavigator() {
  return (
   
    <AuthStack.Navigator
      initialRouteName="Login"
         >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen}/>
    </AuthStack.Navigator>
   
  )
}
