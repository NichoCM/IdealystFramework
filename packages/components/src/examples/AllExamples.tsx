import React from 'react';
import { Screen, View, Text, Divider } from '../index';
import { ButtonExamples } from './ButtonExamples';
import { TextExamples } from './TextExamples';
import { ViewExamples } from './ViewExamples';
import { InputExamples } from './InputExamples';
import { IconExamples } from './IconExamples';
import { CardExamples } from './CardExamples';
import { CheckboxExamples } from './CheckboxExamples';
import { DividerExamples } from './DividerExamples';
import { BadgeExamples } from './BadgeExamples';
import { AvatarExamples } from './AvatarExamples';
import { ScreenExamples } from './ScreenExamples';

export const AllExamples = () => {
  return (
    <Screen background="primary" padding="xl">
      <View spacing="none" style={{ maxWidth: 800, alignSelf: 'center' }}>
      <Text size="xlarge" weight="bold" align="center" color="primary">
        Idealyst Component Library Examples
      </Text>
      <Text size="medium" align="center" color="secondary">
        Comprehensive showcase of all available components
      </Text>
      
      <Divider spacing="large" intent="primary">
        <Text size="small" weight="semibold" color="primary">COMPONENTS</Text>
      </Divider>
      
      <ButtonExamples />
      <Divider spacing="medium" />
      
      <TextExamples />
      <Divider spacing="medium" />
      
      <ViewExamples />
      <Divider spacing="medium" />
      
      <InputExamples />
      <Divider spacing="medium" />
      
      <IconExamples />
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
      <Divider spacing="medium" />
      
      <ScreenExamples />
    </View>
    </Screen>
  );
}; 