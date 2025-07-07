export interface InputProps {
  /**
   * The current value of the input
   */
  value?: string;
  
  /**
   * Called when the text changes
   */
  onChangeText?: (text: string) => void;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  
  /**
   * The type of input (affects keyboard type on mobile)
   */
  inputType?: 'text' | 'email' | 'password' | 'number';
  
  /**
   * Whether to show the password
   */
  secureTextEntry?: boolean;
  
  /**
   * Auto-capitalization behavior
   */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  
  /**
   * Size variant of the input
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Style variant of the input
   */
  variant?: 'default' | 'outlined' | 'filled';
  
  /**
   * Whether the input has an error state
   */
  hasError?: boolean;
  
  /**
   * Additional styles (platform-specific)
   */
  style?: any;
  
  /**
   * Test ID for testing
   */
  testID?: string;
} 