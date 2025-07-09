import React from 'react';
import { Screen, View, Text } from '../index';

export const ScreenExamples = () => {
  return (
    <Screen background="primary">
      <View spacing="lg">
        <Text size="large" weight="bold" align="center">
          Screen Background Test
        </Text>
        
        {/* Test with hardcoded colors */}
        <View spacing="md">
          <Text size="medium" weight="semibold">Hardcoded Color Test</Text>
          <Text size="small" color="secondary">
            This should show blue and yellow backgrounds
          </Text>
          
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen backgroundColor="#e3f2fd">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Blue</Text>
                  <Text size="small" color="secondary">Hardcoded</Text>
                </View>
              </Screen>
            </View>
            
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen backgroundColor="#fff3e0">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Orange</Text>
                  <Text size="small" color="secondary">Hardcoded</Text>
                </View>
              </Screen>
            </View>
          </View>
        </View>
        
        {/* Background Examples */}
        <View spacing="md">
          <Text size="medium" weight="semibold">Background Variants</Text>
          <Text size="small" color="secondary">
            Each Screen should have a different background color
          </Text>
          
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen background="primary">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Primary</Text>
                  <Text size="small" color="secondary">Surface</Text>
                </View>
              </Screen>
            </View>
            
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen background="secondary">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Secondary</Text>
                  <Text size="small" color="secondary">Surface</Text>
                </View>
              </Screen>
            </View>
            
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen background="tertiary">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Tertiary</Text>
                  <Text size="small" color="secondary">Surface</Text>
                </View>
              </Screen>
            </View>
            
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen background="inverse">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold" color="primary">Inverse</Text>
                  <Text size="small" color="secondary">Surface</Text>
                </View>
              </Screen>
            </View>
          </View>
        </View>

        {/* Custom Background Color */}
        <View spacing="md">
          <Text size="medium" weight="semibold">Custom Background Color</Text>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen backgroundColor="#f0f9ff">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Custom</Text>
                  <Text size="small" color="secondary">Light Blue</Text>
                </View>
              </Screen>
            </View>
            
            <View style={{ height: 100, width: 120, borderWidth: 1, borderColor: '#ccc' }}>
              <Screen backgroundColor="#fef3c7">
                <View spacing="sm" style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                  <Text size="small" weight="bold">Custom</Text>
                  <Text size="small" color="secondary">Light Amber</Text>
                </View>
              </Screen>
            </View>
          </View>
        </View>

        {/* Debug Info */}
        <View spacing="md">
          <Text size="medium" weight="semibold">Debug Info</Text>
          <Text size="small" color="secondary">
            If you're seeing this but no background colors, there might be an issue with the theme or Screen component implementation.
          </Text>
        </View>
      </View>
    </Screen>
  );
}; 