import React from 'react';
import { Text as RNText } from 'react-native';
import { TextProps } from './types';
import { textStyles } from './Text.styles';

const Text: React.FC<TextProps> = ({
  children,
  size = 'medium',
  weight = 'normal',
  colorVariant = 'primary',
  color,
  align = 'left',
  style,
  testID,
}) => {
  textStyles.useVariants({
    size,
    weight,
    align,
    color: color ? undefined : colorVariant,
  });

  return (
    <RNText 
      style={[
        textStyles.text,
        color && { color },
        style,
      ]} 
      testID={testID}
    >
      {children}
    </RNText>
  );
};

export default Text; 