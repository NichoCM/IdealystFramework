import React from 'react';
import { Screen, View, Text, Divider } from '../index';

export const DividerExamples = () => {
  return (
    <Screen background="primary">
      <View spacing="lg">
      <Text size="large" weight="bold" align="center">
        Divider Examples
      </Text>
      
      {/* Horizontal Dividers */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Horizontal Dividers</Text>
        <View spacing="sm">
          <Text>Content above</Text>
          <Divider orientation="horizontal" />
          <Text>Content below</Text>
          
          <Text>Content above</Text>
          <Divider orientation="horizontal" variant="dashed" />
          <Text>Content below</Text>
          
          <Text>Content above</Text>
          <Divider orientation="horizontal" variant="dotted" />
          <Text>Content below</Text>
        </View>
      </View>

      {/* Divider Variants */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Variants</Text>
        <View spacing="sm">
          <Text>Solid divider</Text>
          <Divider variant="solid" />
          
          <Text>Dashed divider</Text>
          <Divider variant="dashed" />
          
          <Text>Dotted divider</Text>
          <Divider variant="dotted" />
        </View>
      </View>

      {/* Divider Thickness */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Thickness</Text>
        <View spacing="sm">
          <Text>Thin divider</Text>
          <Divider thickness="thin" />
          
          <Text>Medium divider</Text>
          <Divider thickness="medium" />
          
          <Text>Thick divider</Text>
          <Divider thickness="thick" />
        </View>
      </View>

      {/* Divider Intents */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Intents</Text>
        <View spacing="sm">
          <Text>Primary divider</Text>
          <Divider intent="primary" />
          
          <Text>Secondary divider</Text>
          <Divider intent="secondary" />
          
          <Text>Neutral divider</Text>
          <Divider intent="neutral" />
          
          <Text>Success divider</Text>
          <Divider intent="success" />
          
          <Text>Error divider</Text>
          <Divider intent="error" />
          
          <Text>Warning divider</Text>
          <Divider intent="warning" />
          
          <Text>Info divider</Text>
          <Divider intent="info" />
        </View>
      </View>

      {/* Divider Spacing */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Spacing</Text>
        <View spacing="sm">
          <Text>No spacing</Text>
          <Divider spacing="none" />
          <Text>Content immediately after</Text>
          
          <Text>Small spacing</Text>
          <Divider spacing="small" />
          <Text>Content with small spacing</Text>
          
          <Text>Medium spacing</Text>
          <Divider spacing="medium" />
          <Text>Content with medium spacing</Text>
          
          <Text>Large spacing</Text>
          <Divider spacing="large" />
          <Text>Content with large spacing</Text>
        </View>
      </View>

      {/* Divider with Content */}
      <View spacing="md">
        <Text size="medium" weight="semibold">With Content</Text>
        <View spacing="sm">
          <Text>Content above</Text>
          <Divider spacing="medium">
            <Text size="small" color="secondary">OR</Text>
          </Divider>
          <Text>Content below</Text>
          
          <Text>Content above</Text>
          <Divider spacing="medium" intent="primary">
            <Text size="small" color="primary" weight="semibold">SECTION</Text>
          </Divider>
          <Text>Content below</Text>
        </View>
      </View>

      {/* Vertical Dividers */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Vertical Dividers</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text>Left</Text>
          <Divider orientation="vertical" />
          <Text>Center</Text>
          <Divider orientation="vertical" variant="dashed" />
          <Text>Right</Text>
        </View>
      </View>

      {/* Custom Length */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Custom Length</Text>
        <View spacing="sm">
          <Text>Auto length</Text>
          <Divider length="auto" />
          
          <Text>Full length</Text>
          <Divider length="full" />
          
          <Text>50% length</Text>
          <Divider length={50} />
        </View>
      </View>
    </View>
    </Screen>
  );
}; 