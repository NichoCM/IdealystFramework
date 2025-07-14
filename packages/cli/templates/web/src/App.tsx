import React from 'react';
import { View, Text, Button } from '@idealyst/components';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Text variant="h1">Welcome to {{projectName}}</Text>
      <Text variant="body" style={{ marginTop: 20, textAlign: 'center' }}>
        This is a React web application built with the Idealyst Framework.
      </Text>
      <Button 
        title="Get Started" 
        onPress={() => console.log('Button pressed!')}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default App; 