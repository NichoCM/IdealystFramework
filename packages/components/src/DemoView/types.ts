export interface DemoViewProps {
  title?: string;
  subtitle?: string;
  onButtonPress?: (buttonType: string) => void;
  testID?: string;
}

export interface DemoViewState {
  inputValue: string;
  message: string;
  buttonClickCount: number;
} 