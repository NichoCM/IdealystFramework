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

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ExampleStackRouter, ExampleTabRouter } from '@idealyst/navigation/examples';
import { NavigatorProvider, useNavigator } from '@idealyst/navigation';
import { useUnistyles } from 'react-native-unistyles';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { Icon } from '@idealyst/components';


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
      <Icon name="home" size="md" color="primary" />
      <NavigatorProvider route={ExampleStackRouter} />
    </SafeAreaView>
  );
}

export default App;
