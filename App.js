import React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';

export default function App() {
  return (
      <Tabs />
  );
}



