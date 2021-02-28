import React, { useContext, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'



const AppStack = createStackNavigator()

export default function AppNavigator() {
    const [token, setToken] = useState(false)

    //const { load, token } = useContext(AuthContext)


    //if (load) return null

    return (
        <AppStack.Navigator
            initialRouteName={(token) ? "MainNavigator" : "AuthNavigator"}
            screenOptions={{
                headerShown: false,
                cardStyle: { paddingTop: 0 },
            }}
        >
            <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
            <AppStack.Screen name="MainNavigator" component={MainNavigator} />

        </AppStack.Navigator>
    )
}

