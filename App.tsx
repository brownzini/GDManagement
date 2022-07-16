import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import { LogBox } from "react-native";

import theme from './src/theme';

import { Routes } from './src/routes';

import { AppProvider } from './src/hooks';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    const ignoreWarns = [
      "EventEmitter.removeListener",
      "[fuego-swr-keys-from-collection-path]",
      "Setting a timer for a long period of time",
      "ViewPropTypes will be removed from React Native",
      "AsyncStorage has been extracted from react-native",
      "exported from 'deprecated-react-native-prop-types'.",
      "Non-serializable values were found in the navigation state.",
      "VirtualizedLists should never be nested inside plain ScrollViews",
    ];
    const warn = console.warn;
    console.warn = (...arg) => {
      for (const warning of ignoreWarns) {
        if (arg[0].startsWith(warning)) {
          return;
        }
      }
      warn(...arg);
    };
    LogBox.ignoreLogs(ignoreWarns);
    return null; 
  } else {
    console.log('carregou')
  }

  return (
    <ThemeProvider theme={theme}>
     <AppProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar 
          style="light" 
          translucent 
          backgroundColor='transparent' 
        />
        <Routes />
      </GestureHandlerRootView>
     </AppProvider>
    </ThemeProvider>
  );
}