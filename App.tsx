// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SessionScreen from './screens/SessionScreen';
import HistoryScreen from './screens/HistoryScreen';
import SetupScreen from './screens/SetupScreen';
import { StackParamList } from './App.types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SetupScreen" component={SetupScreen} />
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
