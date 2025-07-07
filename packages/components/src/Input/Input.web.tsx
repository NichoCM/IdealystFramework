import React from 'react';
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
  variant = 'default' as any,
  hasError = false,
  style,
  testID,
}) => {
  const getInputType = () => {
    switch (inputType) {
      case 'email':
        return 'email';
      case 'number':
        return 'number';
      case 'password':
        return 'password';
      case 'text':
      default:
        return 'text';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeText) {
      onChangeText(e.target.value);
    }
  };

  // Apply variants using the correct Unistyles 3.0 pattern
  inputStyles.useVariants({
    size,
    variant,
  });

  // For web, create a comprehensive style object with fallbacks
  const inputStyle = React.useMemo(() => {
    const baseStyle = inputStyles.input;
    const disabledStyle = disabled ? inputStyles.disabled : {};
    const errorStyle = hasError ? inputStyles.error : {};
    
    // Fallback styles in case Unistyles isn't working
    const fallbackStyle = {
      padding: '8px 12px',
      fontSize: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      color: '#000000',
      outline: 'none',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      width: '100%',
      ...baseStyle,
      ...disabledStyle,
      ...errorStyle,
    };
    
    // Merge with any additional styles
    if (style) {
      return { ...fallbackStyle, ...style };
    }
    
    return fallbackStyle;
  }, [disabled, hasError, style]);

  return (
    <input
      style={inputStyle}
      type={secureTextEntry ? 'password' : getInputType()}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      autoCapitalize={autoCapitalize}
      data-testid={testID}
    />
  );
};

export default Input; 