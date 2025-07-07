import { StyleSheet } from 'react-native-unistyles';

export const buttonStyles = StyleSheet.create((theme) => ({
    button: {
        variants: {
            variant: {
                primary: {
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.primary,
                    color: 'white',
                },
                secondary: {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.secondary,
                    color: 'white',
                },
                outline: {
                    backgroundColor: 'transparent',
                    borderColor: theme.colors.primary,
                    color: theme.colors.primary,
                    _web: {
                        outline: `1px solid ${theme.colors.primary}`,
                        _hover: {
                            backgroundColor: theme.colors.primary,
                            color: 'white',
                        },
                    },
                },
            },
            size: {
                small: {
                    paddingHorizontal: theme.spacing.sm,
                    paddingVertical: theme.spacing.xs,
                    minHeight: 24,
                    fontSize: 14,
                },
                medium: {
                    paddingHorizontal: theme.spacing.md,
                    paddingVertical: theme.spacing.sm,
                    minHeight: 32,
                    fontSize: 16,
                },  
                large: {
                    paddingHorizontal: theme.spacing.lg,
                    paddingVertical: theme.spacing.md,
                    minHeight: 40,
                    fontSize: 18,
                },
            },
        },
        margin: 5,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        fontWeight: '600',
        textAlign: 'center',
        // Web-specific styles
        _web: {
            cursor: 'pointer',
            borderWidth: 0,
            outline: 'none',
            display: 'flex',
            boxSizing: 'border-box',
            userSelect: 'none',
            transition: 'all 0.2s ease',
            _hover: {
                opacity: 0.9,
            },
            _active: {
                transform: 'scale(0.98)',
            },
            _focus: {
                outlineOffset: '2px',
            },
        },
    },
    // Text styles for native platform
    text: {
        fontWeight: '600',
        textAlign: 'center',
        variants: {
            size: {
                small: {
                    fontSize: 14,
                },
                medium: {
                    fontSize: 16,
                },
                large: {
                    fontSize: 18,
                },
            },
            variant: {
                primary: {
                    color: 'white',
                },
                secondary: {
                    color: 'white',
                },
                outline: {
                    color: theme.colors.primary,
                },
            },
        },
    },
    disabledText: {
        opacity: 0.6,
    },
})); 