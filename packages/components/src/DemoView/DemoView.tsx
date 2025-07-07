import React, { useState } from 'react';
import { UnistylesRuntime, StyleSheet } from 'react-native-unistyles';
import { DemoViewProps } from './types';
import Button from '../Button';
import Text from '../Text';
import View from '../View';
import Input from '../Input';

const DemoView: React.FC<DemoViewProps> = ({
  title = 'Cross-Platform App',
  subtitle = 'Built with shared components',
  onButtonPress,
  testID,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(UnistylesRuntime.themeName || 'light');

  const handleButtonPress = (buttonType: string) => {
    const newCount = buttonClickCount + 1;
    setButtonClickCount(newCount);
    setMessage(`${buttonType} button pressed! (${newCount} total clicks)`);
    
    if (onButtonPress) {
      onButtonPress(buttonType);
    }
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setMessage(`Input changed: "${text}"`);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      setMessage(`Input submitted: "${inputValue}"`);
      setInputValue('');
    }
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    UnistylesRuntime.setTheme(newTheme);
    setCurrentTheme(newTheme);
    setMessage(`Theme changed to ${newTheme} mode`);
  };

  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.header}>
        <Text size="xlarge" weight="bold" style={styles.title}>
          {title}
        </Text>
        <Text size="medium" style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      {/* Theme Toggle Section */}
      <View style={styles.themeToggle}>
        <Text size="medium" weight="bold" style={styles.themeText}>
          Current Theme: {currentTheme}
        </Text>
        <Button
          variant="outlined"
          intent="primary"
          size="medium"
          onPress={toggleTheme}
          testID="theme-toggle-button"
        >
          🌙 Toggle to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </View>

      <View style={styles.section}>
        <Text size="large" weight="bold" style={styles.sectionTitle}>
          Buttons
        </Text>
        <View style={styles.buttonGroup}>
          <Button
            variant="contained"
            intent="primary"
            size="medium"
            onPress={() => handleButtonPress('Primary')}
            testID="primary-button"
            style={styles.button}
          >
            Primary
          </Button>
          <Button
            variant="outlined"
            intent="success"
            size="medium"
            onPress={() => handleButtonPress('Success')}
            testID="success-button"
            style={styles.button}
          >
            Success
          </Button>
          <Button
            variant="text"
            intent="error"
            size="medium"
            onPress={() => handleButtonPress('Error')}
            testID="error-button"
            style={styles.button}
          >
            Error
          </Button>
          <Button
            variant="contained"
            intent="warning"
            size="medium"
            onPress={() => handleButtonPress('Warning')}
            testID="warning-button"
            style={styles.button}
          >
            Warning
          </Button>
        </View>
      </View>

      <View style={styles.section}>
        <Text size="large" weight="bold" style={styles.sectionTitle}>
          Input
        </Text>
        <View style={styles.inputGroup}>
          <Input
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Type something..."
            style={styles.input}
            testID="text-input"
          />
          <Button
            variant="contained"
            intent="primary"
            size="small"
            onPress={handleInputSubmit}
            testID="submit-button"
          >
            Submit
          </Button>
        </View>
      </View>

      <View style={styles.section}>
        <Text size="large" weight="bold" style={styles.sectionTitle}>
          Status
        </Text>
        <View style={styles.message}>
          <Text size="medium" style={styles.messageText}>
            {message || 'Try interacting with the components above!'}
          </Text>
        </View>
      </View>

      <View style={styles.platform}>
        <Text size="small" style={styles.platformText}>
          Platform: {typeof window !== 'undefined' ? 'Web' : 'Native'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: theme.spacing?.lg || 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors?.surface?.primary || theme.colors?.background || '#ffffff',
  },
  
  header: {
    marginBottom: theme.spacing?.xl || 30,
    alignItems: 'center',
  },
  
  title: {
    marginBottom: theme.spacing?.sm || 10,
    color: theme.colors?.text?.primary || '#000000',
  },
  
  subtitle: {
    color: theme.colors?.text?.secondary || '#666666',
  },
  
  themeToggle: {
    marginBottom: theme.spacing?.lg || 20,
    alignItems: 'center',
  },
  
  themeText: {
    marginBottom: theme.spacing?.sm || 10,
    color: theme.colors?.text?.primary || '#000000',
  },
  
  section: {
    marginBottom: theme.spacing?.xl || 25,
    width: '100%',
    maxWidth: 400,
  },
  
  sectionTitle: {
    marginBottom: theme.spacing?.md || 15,
    color: theme.colors?.text?.primary || '#000000',
  },
  
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing?.xs || 5,
  },
  
  button: {
    margin: theme.spacing?.xs || 5,
  },
  
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing?.sm || 10,
  },
  
  input: {
    flex: 1,
    marginRight: theme.spacing?.sm || 10,
  },
  
  message: {
    padding: theme.spacing?.md || 15,
    backgroundColor: theme.colors?.surface?.secondary || '#f0f0f0',
    borderRadius: theme.borderRadius?.md || 8,
    alignItems: 'center',
    minHeight: 20,
    borderWidth: 1,
    borderColor: theme.colors?.border?.primary || '#e0e0e0',
  },
  
  messageText: {
    color: theme.colors?.text?.primary || '#000000',
  },
  
  platform: {
    padding: theme.spacing?.sm || 10,
    backgroundColor: theme.colors?.surface?.tertiary || '#e8f4f8',
    borderRadius: theme.borderRadius?.md || 8,
    alignItems: 'center',
    marginTop: theme.spacing?.lg || 20,
    borderWidth: 1,
    borderColor: theme.colors?.border?.secondary || '#d0d0d0',
  },
  
  platformText: {
    color: theme.colors?.text?.secondary || '#666666',
  },
}));

export default DemoView; 