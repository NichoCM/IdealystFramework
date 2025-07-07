import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'disabled'> {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
} 