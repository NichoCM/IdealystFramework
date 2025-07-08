/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
} from 'react-native';

import { DemoView, View, Divider } from '@idealyst/components';
import { Navigator } from './Navigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const handleButtonPress = (buttonType: string) => {
    console.log(`Native app received button press: ${buttonType}`);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'red' : 'red',
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Navigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
