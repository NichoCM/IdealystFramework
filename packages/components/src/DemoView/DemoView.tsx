import React, { useState } from 'react';
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

  const containerStyle = {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headerStyle = {
    marginBottom: 30,
    alignItems: 'center',
  };

  const sectionStyle = {
    marginBottom: 25,
    width: '100%',
    maxWidth: 400,
  };

  const buttonGroupStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const inputGroupStyle = {
    flexDirection: 'row',
    alignItems: 'center',
  };

  const messageStyle = {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    minHeight: 20,
  };

  const platformStyle = {
    padding: 10,
    backgroundColor: '#e8f4f8',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  };

  return (
    <View style={containerStyle} testID={testID}>
      <View style={headerStyle}>
        <Text size="xlarge" weight="bold" style={{ marginBottom: 10 }}>
          {title}
        </Text>
        <Text size="medium" style={{ color: '#666' }}>
          {subtitle}
        </Text>
      </View>

      <View style={sectionStyle}>
        <Text size="large" weight="bold" style={{ marginBottom: 15 }}>
          Buttons
        </Text>
        <View style={buttonGroupStyle}>
          <Button
            variant="primary"
            size="medium"
            onPress={() => handleButtonPress('Primary')}
            testID="primary-button"
            style={{ margin: 5 }}
          >
            Primary
          </Button>
          <Button
            variant="secondary"
            size="medium"
            onPress={() => handleButtonPress('Secondary')}
            testID="secondary-button"
            style={{ margin: 5 }}
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            size="medium"
            onPress={() => handleButtonPress('Outline')}
            testID="outline-button"
            style={{ margin: 5 }}
          >
            Outline
          </Button>
        </View>
      </View>

      <View style={sectionStyle}>
        <Text size="large" weight="bold" style={{ marginBottom: 15 }}>
          Input
        </Text>
        <View style={inputGroupStyle}>
          <Input
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Type something..."
            style={{ flex: 1, marginRight: 10 }}
            testID="text-input"
          />
          <Button
            variant="primary"
            size="small"
            onPress={handleInputSubmit}
            testID="submit-button"
          >
            Submit
          </Button>
        </View>
      </View>

      <View style={sectionStyle}>
        <Text size="large" weight="bold" style={{ marginBottom: 15 }}>
          Message
        </Text>
        <View style={messageStyle}>
          <Text size="medium">
            {message || 'No messages yet. Try pressing a button or typing something!'}
          </Text>
        </View>
      </View>

      <View style={platformStyle}>
        <Text size="medium" weight="bold">
          Cross-Platform DemoView
        </Text>
        <Text size="small" style={{ marginTop: 5 }}>
          This component works on both Web and React Native!
        </Text>
      </View>
    </View>
  );
};

export default DemoView; 