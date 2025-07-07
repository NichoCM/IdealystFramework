import { ReactNode } from 'react';

export interface BadgeProps {
  /**
   * The content to display inside the badge
   */
  children?: ReactNode;
  
  /**
   * The size of the badge
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The visual style variant of the badge
   */
  variant?: 'filled' | 'outlined' | 'dot';
  
  /**
   * The intent/color scheme of the badge
   */
  intent?: 'primary' | 'success' | 'error' | 'warning' | 'neutral' | 'info';
  
  /**
   * Additional styles
   */
  style?: any;
  
  /**
   * Test ID for testing
   */
  testID?: string;
} 