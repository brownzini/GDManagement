import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native'

import { AppStackRoutes } from './app.stack.routes'

import HomeSvg from '../assets/home.svg';
import BookSvg from '../assets/books.svg';

import Docs from '../screens/Docs';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    return (
        <Navigator 
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#6C0AB9',
            tabBarInactiveTintColor: '#9B9B9B',
            tabBarShowLabel: false,
            tabBarStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 60,
                backgroundColor: '#fff',
            }
          }}
        >
        <Screen
          name='Inicio'
          component={AppStackRoutes}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeSvg width={24} height={24} fill={color} />
            )
          }}
        />
        <Screen
          name="Docs" 
          component={Docs} 
          options={{
            tabBarIcon: ({ focused, color }) => (
              <BookSvg width={24} height={24} fill={color} />
            )
          }}
        />
        </Navigator>
    )
}