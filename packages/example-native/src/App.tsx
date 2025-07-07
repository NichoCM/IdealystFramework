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
} from 'react-native';

import { DemoView } from '@idealyst/components';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const handleButtonPress = (buttonType: string) => {
    console.log(`Native app received button press: ${buttonType}`);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <DemoView 
        title="React Native App with Unistyles"
        subtitle="Full featured cross-platform app with advanced styling"
        onButtonPress={handleButtonPress}
        testID="native-home-screen"
      />
    </SafeAreaView>
  );
}

export default App;
