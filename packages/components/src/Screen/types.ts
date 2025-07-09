import { ReactNode } from 'react';

export interface ScreenProps {
  /**
   * The content to display inside the screen
   */
  children?: ReactNode;
  
  /**
   * Background variant - controls the background color
   */
  background?: 'primary' | 'secondary' | 'tertiary' | 'inverse';
  
  /**
   * Additional styles (platform-specific)
   */
  style?: any;
  
  /**
   * Test ID for testing
   */
  testID?: string;
} 