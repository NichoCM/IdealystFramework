export interface AvatarProps {
  /**
   * Image source (URL or require())
   */
  src?: string | any;
  
  /**
   * Alt text for the image
   */
  alt?: string;
  
  /**
   * Fallback text (usually initials)
   */
  fallback?: string;
  
  /**
   * Size of the avatar
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  
  /**
   * Shape of the avatar
   */
  shape?: 'circle' | 'square';
  
  /**
   * Additional styles
   */
  style?: any;
  
  /**
   * Test ID for testing
   */
  testID?: string;
} 