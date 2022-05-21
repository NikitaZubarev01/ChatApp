import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, StyleSheet, Platform } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TabOneScreen from './screens/HomeScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';
import MessageInput from './components/MessageInput';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.root}>
        <Navigation/>
      </SafeAreaProvider>
    );
  }
}

const styles= StyleSheet.create({
  
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
})
