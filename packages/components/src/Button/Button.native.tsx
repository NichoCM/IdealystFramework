import React from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';
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
  buttonStyles.useVariants({
    variant: variant as 'primary' | 'secondary' | 'outline',
    size: size as 'small' | 'medium' | 'large',
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      testID={testID}
      activeOpacity={0.7}
    >
      <View style={[
        buttonStyles.button,
      ]}>
        <Text style={[
          buttonStyles.text, 
          disabled && buttonStyles.disabledText
        ]}>
          {children}
        </Text>
      </View>
    
    </TouchableOpacity>
  );
};

export default Button; 