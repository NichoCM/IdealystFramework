/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { ExampleStackRouter, ExampleTabRouter } from '@idealyst/navigation/examples';
import { NavigatorProvider } from '@idealyst/navigation';
import { useUnistyles } from 'react-native-unistyles';


function App() {

  const {rt} = useUnistyles()
  
  const isDarkMode = rt.themeName === 'dark';
  const handleButtonPress = (buttonType: string) => {
    console.log(`Native app received button press: ${buttonType}`);
  };

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigatorProvider route={ExampleStackRouter} />
    </SafeAreaView>
  );
}

export default App;
