import React from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './types';
import { inputStyles } from './Input.styles';

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  disabled = false,
  inputType = 'text',
  secureTextEntry = false,
  autoCapitalize = 'sentences',
  size = 'medium',
  variant = 'default',
  hasError = false,
  style,
  testID,
}) => {
  const getKeyboardType = () => {
    switch (inputType) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'password':
      case 'text':
      default:
        return 'default';
    }
  };

  inputStyles.useVariants({
    size,
    variant,
  });

  const inputStyleArray = [
    inputStyles.input,
    disabled && inputStyles.disabled,
    hasError && inputStyles.error,
    style,
  ];

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      editable={!disabled}
      keyboardType={getKeyboardType()}
      secureTextEntry={secureTextEntry || inputType === 'password'}
      autoCapitalize={autoCapitalize}
      style={inputStyleArray}
      testID={testID}
      placeholderTextColor="#999999"
    />
  );
};

export default Input; 