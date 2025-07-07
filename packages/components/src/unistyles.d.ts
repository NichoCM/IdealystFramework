declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: {
      colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textSecondary: string;
        border: string;
        success: string;
        warning: string;
        error: string;
      };
      spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
      borderRadius: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
      typography: {
        fontSize: {
          xs: number;
          sm: number;
          md: number;
          lg: number;
          xl: number;
          xxl: number;
        };
        fontWeight: {
          light: string;
          regular: string;
          medium: string;
          semibold: string;
          bold: string;
        };
      };
      gap: (value: number) => number;
      scale: (value: number) => number;
    };
    dark: {
      colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
        textSecondary: string;
        border: string;
        success: string;
        warning: string;
        error: string;
      };
      spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
      borderRadius: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
      typography: {
        fontSize: {
          xs: number;
          sm: number;
          md: number;
          lg: number;
          xl: number;
          xxl: number;
        };
        fontWeight: {
          light: string;
          regular: string;
          medium: string;
          semibold: string;
          bold: string;
        };
      };
      gap: (value: number) => number;
      scale: (value: number) => number;
    };
  }
  
  export interface UnistylesBreakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
} 