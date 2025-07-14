import React from 'react';
import { Screen, View, Text, Button } from '@idealyst/components';
import { UnistylesRegistry } from 'react-native-unistyles';
import { lightTheme, darkTheme } from '@idealyst/theme';

// Register themes
UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
});

const App = () => {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text variant="h1">Welcome to {{projectName}}</Text>
        <Text variant="body">
          This is a React Native app built with the Idealyst Framework.
        </Text>
        <Button 
          title="Get Started" 
          onPress={() => console.log('Button pressed!')}
          style={{ marginTop: 20 }}
        />
      </View>
    </Screen>
  );
};

export default App; 