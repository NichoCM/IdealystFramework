import React from 'react';
import { getWebProps } from 'react-native-unistyles/web';
import { ScreenProps } from './types';
import { screenStyles } from './Screen.styles';

const Screen: React.FC<ScreenProps> = ({
  children,
  background = 'primary',
  style,
  testID,
}) => {
  screenStyles.useVariants({
    background,
  });

  // Use getWebProps to generate className and ref for web
  const webProps = getWebProps(screenStyles.screen);

  console.log(webProps);

  return (
    <div
      {...webProps}
      data-testid={testID}
    >
      {children}
    </div>
  );
};

export default Screen; 