import React from 'react';
import { View as RNView, ViewStyle } from 'react-native';
import { ScreenProps } from './types';
import { screenStyles } from './Screen.styles';

const Screen: React.FC<ScreenProps> = ({
  children,
  background = 'primary',
  padding = 'md',
  safeArea = false,
  style,
  testID,
}) => {
  screenStyles.useVariants({
    background,
    padding,
    safeArea,
  });

  const screenStyleArray = [
    screenStyles.screen,
    style,
  ];

  return (
    <RNView style={screenStyleArray} testID={testID}>
      {children}
    </RNView>
  );
};

export default Screen; 