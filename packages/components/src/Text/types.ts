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
   * The color of the text
   */
  color?: 'primary' | 'secondary' | 'disabled' | 'inverse' | 'muted' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  
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