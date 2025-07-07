import React from 'react';
import { ButtonProps } from './types';
import { buttonStyles } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  title,
  children,
  onPress,
  disabled = false,
  variant = 'contained',
  intent = 'primary',
  size = 'medium',
  style,
  testID,
}) => {
  const handleClick = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  // Apply variants using the correct Unistyles 3.0 pattern
  buttonStyles.useVariants({
    size,
    intent,
    variant,
    disabled,
  });

  // Get variant-specific styles manually as fallback
  const getVariantStyles = () => {
    const baseStyle = {
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 16px' : '8px 12px',
      fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
      minHeight: size === 'small' ? '24px' : size === 'large' ? '40px' : '32px',
    };

    // Intent colors
    const intentColors = {
      primary: { main: '#3b82f6', on: '#ffffff' },
      success: { main: '#22c55e', on: '#ffffff' },
      error: { main: '#ef4444', on: '#ffffff' },
      warning: { main: '#f59e0b', on: '#ffffff' },
      neutral: { main: '#6b7280', on: '#ffffff' },
    };

    const colors = intentColors[intent] || intentColors.primary;

    // Variant-specific styles
    let variantStyle = {};
    switch (variant) {
      case 'contained':
        variantStyle = {
          backgroundColor: colors.main,
          borderColor: colors.main,
          color: colors.on,
          border: `1px solid ${colors.main}`,
        };
        break;
      case 'outlined':
        variantStyle = {
          backgroundColor: 'transparent',
          borderColor: colors.main,
          color: colors.main,
          border: `1px solid ${colors.main}`,
        };
        break;
      case 'text':
        variantStyle = {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: colors.main,
          border: 'none',
        };
        break;
      default:
        variantStyle = {
          backgroundColor: colors.main,
          borderColor: colors.main,
          color: colors.on,
          border: `1px solid ${colors.main}`,
        };
    }

    return { ...baseStyle, ...variantStyle };
  };

  // Create the final style
  const buttonStyle = React.useMemo(() => {
    const baseStyles = {
      fontWeight: '600',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      outline: 'none',
      boxSizing: 'border-box',
      userSelect: 'none',
      textAlign: 'center',
    };

    const variantStyles = getVariantStyles();
    const unistylesBase = buttonStyles.button || {};

    // Merge styles: base → variants → unistyles → user
    return {
      ...baseStyles,
      ...variantStyles,
      ...unistylesBase,
      ...style,
    };
  }, [size, intent, variant, disabled, style]);

  // Use children if available, otherwise use title
  const buttonContent = children || title;

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testID}
    >
      {buttonContent}
    </button>
  );
};

export default Button; 