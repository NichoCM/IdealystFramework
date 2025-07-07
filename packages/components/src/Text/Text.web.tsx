import React from 'react';
import { getWebProps } from 'react-native-unistyles/web';
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

  // Create the style array following the official documentation pattern
  const textStyleArray = [
    textStyles.text,
    color && { color },
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