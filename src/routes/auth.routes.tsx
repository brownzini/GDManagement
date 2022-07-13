import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../screens/SignIn'
import Splash from '../screens/Splash'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='SignIn'
        >
         <Screen
            name='SignIn'
            component={SignIn}
         />
        <Screen
            name="Splash" 
            component={Splash} 
            options={{
                gestureEnabled: false,
            }}
        />
        </Navigator>
    )
}