import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { AvatarProps } from './types';
import { avatarStyles } from './Avatar.styles';

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  size = 'medium',
  shape = 'circle',
  style,
  testID,
}) => {
  const [hasError, setHasError] = useState(false);

  avatarStyles.useVariants({
    size,
    shape,
  });

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <View style={[avatarStyles.avatar, style]} testID={testID}>
      {src && !hasError ? (
        <Image
          source={typeof src === 'string' ? { uri: src } : src}
          style={avatarStyles.image}
          onError={handleImageError}
          accessibilityLabel={alt}
        />
      ) : (
        <Text style={avatarStyles.fallback}>
          {fallback}
        </Text>
      )}
    </View>
  );
};

export default Avatar; 