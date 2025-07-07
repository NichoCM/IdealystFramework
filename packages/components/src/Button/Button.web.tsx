import React from 'react';
import { getWebProps } from 'react-native-unistyles/web';
import { ButtonProps } from './types';
import { buttonStyles } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  style,
  testID,
}) => {
  const handleClick = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  buttonStyles.useVariants({
    variant: variant,
    size,
  });

  // Create the style array using shared styles
  const buttonStyleArray = [
    buttonStyles.button,
    style,
  ];

  // Use getWebProps to generate className and ref for web
  const webProps = getWebProps(buttonStyleArray);

  return (
    <button
      {...webProps}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testID}
    >
      {children}
    </button>
  );
};

export default Button; 