import React from 'react';
import { View, Text, Badge, Button } from '../index';

export const BadgeExamples = () => {
  return (
    <View spacing="lg" style={{ flex: 1 }}>
      <Text size="large" weight="bold" align="center">
        Badge Examples
      </Text>
      
      {/* Badge Variants */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Variants</Text>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="filled" intent="primary">
            Filled
          </Badge>
          <Badge variant="outlined" intent="primary">
            Outlined
          </Badge>
          <Badge variant="dot" intent="primary" />
        </View>
      </View>

      {/* Badge Sizes */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Sizes</Text>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge size="small" intent="primary">
            Small
          </Badge>
          <Badge size="medium" intent="primary">
            Medium
          </Badge>
          <Badge size="large" intent="primary">
            Large
          </Badge>
        </View>
      </View>

      {/* Badge Intents */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Intents</Text>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge intent="primary">
            Primary
          </Badge>
          <Badge intent="success">
            Success
          </Badge>
          <Badge intent="error">
            Error
          </Badge>
          <Badge intent="warning">
            Warning
          </Badge>
          <Badge intent="neutral">
            Neutral
          </Badge>
          <Badge intent="info">
            Info
          </Badge>
        </View>
      </View>

      {/* Dot Badges */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Dot Badges</Text>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="dot" intent="primary" size="small" />
          <Badge variant="dot" intent="success" size="medium" />
          <Badge variant="dot" intent="error" size="large" />
          <Badge variant="dot" intent="warning" size="medium" />
          <Badge variant="dot" intent="neutral" size="medium" />
        </View>
      </View>

      {/* Number Badges */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Number Badges</Text>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge intent="error" size="small">
            1
          </Badge>
          <Badge intent="error" size="medium">
            5
          </Badge>
          <Badge intent="error" size="large">
            99+
          </Badge>
          <Badge intent="primary" size="medium">
            42
          </Badge>
        </View>
      </View>

      {/* Status Badges */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Status Badges</Text>
        <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge intent="success" variant="filled">
            ACTIVE
          </Badge>
          <Badge intent="warning" variant="filled">
            PENDING
          </Badge>
          <Badge intent="error" variant="filled">
            INACTIVE
          </Badge>
          <Badge intent="neutral" variant="outlined">
            DRAFT
          </Badge>
          <Badge intent="info" variant="outlined">
            REVIEW
          </Badge>
        </View>
      </View>

      {/* Combined with Other Components */}
      <View spacing="md">
        <Text size="medium" weight="semibold">With Other Components</Text>
        <View spacing="sm">
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text>Notifications</Text>
            <Badge intent="error" size="small">3</Badge>
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text>Messages</Text>
            <Badge intent="primary" size="small">12</Badge>
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text>Status</Text>
            <Badge intent="success" variant="dot" />
            <Text size="small" colorVariant="secondary">Online</Text>
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Button size="small" variant="outlined">
              Inbox
            </Button>
            <Badge intent="error" size="small">99+</Badge>
          </View>
        </View>
      </View>

      {/* Category Badges */}
      <View spacing="md">
        <Text size="medium" weight="semibold">Category Badges</Text>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <Badge intent="primary" variant="outlined">
            React
          </Badge>
          <Badge intent="success" variant="outlined">
            TypeScript
          </Badge>
          <Badge intent="info" variant="outlined">
            JavaScript
          </Badge>
          <Badge intent="warning" variant="outlined">
            CSS
          </Badge>
          <Badge intent="neutral" variant="outlined">
            HTML
          </Badge>
        </View>
      </View>
    </View>
  );
}; 