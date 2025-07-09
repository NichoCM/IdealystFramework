import React from 'react';
import { Screen, View, Text } from '../index';

export const TextExamples = () => {
  return (
    <Screen background="primary" padding="lg">
      <View spacing="none">
      <Text size="large" weight="bold" align="center">
        Text Examples
      </Text>
      
      {/* Text Sizes */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Sizes</Text>
        <View spacing="sm" style={{ gap: 10 }}>
          <Text size="small">Small text - Lorem ipsum dolor sit amet</Text>
          <Text size="medium">Medium text - Lorem ipsum dolor sit amet</Text>
          <Text size="large">Large text - Lorem ipsum dolor sit amet</Text>
          <Text size="xlarge">Extra large text - Lorem ipsum dolor sit amet</Text>
        </View>
      </View>

      {/* Text Weights */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Weights</Text>
        <View spacing="sm" style={{ gap: 10 }}>
          <Text weight="light">Light weight text</Text>
          <Text weight="normal">Normal weight text</Text>
          <Text weight="medium">Medium weight text</Text>
          <Text weight="semibold">Semibold weight text</Text>
          <Text weight="bold">Bold weight text</Text>
        </View>
      </View>

      {/* Text Colors */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Color Variants</Text>
        <View spacing="sm" style={{ gap: 10 }}>
          <Text color="primary">Primary color text</Text>
          <Text color="secondary">Secondary color text</Text>
          <Text color="success">Success color text</Text>
          <Text color="warning">Warning color text</Text>
          <Text color="error">Error color text</Text>
        </View>
      </View>

      {/* Text Alignment */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Alignment</Text>
        <View spacing="sm" style={{ gap: 10 }}>
          <Text align="left">Left aligned text</Text>
          <Text align="center">Center aligned text</Text>
          <Text align="right">Right aligned text</Text>
        </View>
      </View>

      {/* Combined Examples */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Combined Examples</Text>
        <View spacing="sm" style={{ gap: 10 }}>
          <Text size="large" weight="bold" color="primary" align="center">
            Large Bold Primary Centered
          </Text>
          <Text size="small" weight="light" color="secondary" align="right">
            Small Light Secondary Right
          </Text>
          <Text size="medium" weight="semibold" color="success">
            Medium Semibold Success
          </Text>
        </View>
      </View>
    </View>
    </Screen>
  );
}; 