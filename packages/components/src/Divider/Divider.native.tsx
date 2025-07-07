import React from 'react';
import { View, Text } from 'react-native';
import { DividerProps } from './types';
import { dividerStyles } from './Divider.styles';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  thickness = 'thin',
  intent = 'neutral',
  length = 'full',
  spacing = 'medium',
  children,
  style,
  testID,
  accessibilityLabel,
}) => {
  // Apply variants for main divider
  dividerStyles.useVariants({
    orientation,
    thickness,
    variant: variant as any,
    intent,
    length: typeof length === 'number' ? 'auto' : length,
    spacing,
  });

  // If no children, render simple divider
  if (!children) {
    return (
      <View
        style={[dividerStyles.divider, style]}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="separator"
      />
    );
  }

  // If has children, render divider with content
  return (
    <View
      style={dividerStyles.container}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="separator"
    >
      <View style={dividerStyles.line} />
      <Text style={dividerStyles.content}>
        {children}
      </Text>
      <View style={dividerStyles.line} />
    </View>
  );
};

export default Divider; 