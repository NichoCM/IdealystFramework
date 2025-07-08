import React from 'react';
import { View, Text, Divider } from '../index';
import { ButtonExamples } from './ButtonExamples';
import { TextExamples } from './TextExamples';
import { ViewExamples } from './ViewExamples';
import { InputExamples } from './InputExamples';
import { CardExamples } from './CardExamples';
import { CheckboxExamples } from './CheckboxExamples';
import { DividerExamples } from './DividerExamples';
import { BadgeExamples } from './BadgeExamples';
import { AvatarExamples } from './AvatarExamples';

export const AllExamples = () => {
  return (
    <View spacing="xl" style={{ flex: 1, maxWidth: 800, alignSelf: 'center' }}>
      <Text size="xlarge" weight="bold" align="center" colorVariant="primary">
        Idealyst Component Library Examples
      </Text>
      <Text size="medium" align="center" colorVariant="secondary">
        Comprehensive showcase of all available components
      </Text>
      
      <Divider spacing="large" intent="primary">
        <Text size="small" weight="semibold" colorVariant="primary">COMPONENTS</Text>
      </Divider>
      
      <ButtonExamples />
      <Divider spacing="medium" />
      
      <TextExamples />
      <Divider spacing="medium" />
      
      <ViewExamples />
      <Divider spacing="medium" />
      
      <InputExamples />
      <Divider spacing="medium" />
      
      <CardExamples />
      <Divider spacing="medium" />
      
      <CheckboxExamples />
      <Divider spacing="medium" />
      
      <DividerExamples />
      <Divider spacing="medium" />
      
      <BadgeExamples />
      <Divider spacing="medium" />
      
      <AvatarExamples />
    </View>
  );
}; 