import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppTabRoutes } from './app.tab.routes'
import { useAuth } from '../hooks/auth'
import { AuthRoutes } from './auth.routes'

export function Routes() {
    const { isLogged } = useAuth();
    return (
        <NavigationContainer>
          {isLogged ? <AppTabRoutes /> : <AuthRoutes />} 
        </NavigationContainer>
    )
}