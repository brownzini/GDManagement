import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ListProducts from '../screens/Products/ListProducts';
import CreateProducts from '../screens/Products/CreateProducts';

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
                gestureEnabled: false,
            }}
         />
        <Screen
            name='CreateProducts'
            component={CreateProducts}
            options={{
                gestureEnabled: false,
            }}
         />
         <Screen
            name='ListProducts'
            component={ListProducts}
            options={{
                gestureEnabled: false,
            }}
         />
        </Navigator>
    )
}