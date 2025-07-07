import React from 'react';
import { View, Text } from 'react-native';
import { BadgeProps } from './types';
import { badgeStyles } from './Badge.styles';

const Badge: React.FC<BadgeProps> = ({
  children,
  size = 'medium',
  variant = 'filled',
  intent = 'primary',
  style,
  testID,
}) => {
  badgeStyles.useVariants({
    size,
    variant: variant as any,
    intent,
  });

  if (variant === 'dot') {
    return (
      <View
        style={[badgeStyles.badge, style]}
        testID={testID}
        accessibilityRole="status"
      />
    );
  }

  return (
    <View
      style={[badgeStyles.badge, style]}
      testID={testID}
      accessibilityRole="status"
    >
      <Text style={badgeStyles.text}>
        {children}
      </Text>
    </View>
  );
};

export default Badge; 