import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ListProducts from '../screens/Products/ListProducts';
import CreateProducts from '../screens/Products/CreateProducts';
import UpdateProducts from '../screens/Products/UpdateProducts';
import Statistics from '../screens/Statistics';
import Settings from '../screens/Settings';

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
            name='ListProducts'
            component={ListProducts}
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
            name='UpdateProducts'
            component={UpdateProducts}
            options={{
                gestureEnabled: false,
            }}
         />
        <Screen
            name='Statistics'
            component={Statistics}
            options={{
                gestureEnabled: false,
            }}
        />
        <Screen
            name='Settings'
            component={Settings}
            options={{
                gestureEnabled: false,
            }}
        />
        </Navigator>
    )
}