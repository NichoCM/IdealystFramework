import { ReactNode } from 'react';

export interface ButtonProps {
  /**
   * The text or content to display inside the button
   */
  children: ReactNode;
  
  /**
   * Called when the button is pressed
   */
  onPress?: () => void;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline';
  
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Additional styles (platform-specific)
   */
  style?: any;
  
  /**
   * Test ID for testing
   */
  testID?: string;
} 