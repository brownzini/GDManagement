import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Splash from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
            }}
            initialRouteName='Home'
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    gestureEnabled: false
                }}
            />
        </Navigator>
    )
}