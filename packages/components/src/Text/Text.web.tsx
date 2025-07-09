import React from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { getWebProps } from 'react-native-unistyles/web';
import { TextProps } from './types';
import textStylesFunction from './Text.styles';

const textStyles = StyleSheet.create(textStylesFunction);

const Text: React.FC<TextProps> = ({
  children,
  size = 'medium',
  weight = 'normal',
  color,
  align = 'left',
  style,
  testID,
}) => {
  textStyles.useVariants({
    size,
    weight,
    align,
    color: color
  });

  // Create the style array following the official documentation pattern
  const textStyleArray = [
    textStyles.text,
    style,
  ];

  // Use getWebProps to generate className and ref for web
  const webProps = getWebProps(textStyleArray);

  return (
    <span
      {...webProps}
      data-testid={testID}
    >
      {children}
    </span>
  );
};

export default Text; 