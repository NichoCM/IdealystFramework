import { ReactNode } from 'react';

export interface TextProps {
  /**
   * The text content to display
   */
  children: ReactNode;
  
  /**
   * The size variant of the text
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  
  /**
   * The weight of the text
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  
  /**
   * The color variant of the text
   */
  colorVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  
  /**
   * Custom color (overrides colorVariant)
   */
  color?: string;
  
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
  
  /**
   * Additional styles (platform-specific)
   */
  style?: any;
  
  /**
   * Test ID for testing
   */
  testID?: string;
} 