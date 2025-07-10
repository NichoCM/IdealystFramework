import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ExampleStackRouter, } from '@idealyst/navigation/examples';
import { NavigatorProvider } from '@idealyst/navigation';
import { useUnistyles } from 'react-native-unistyles';

function App() {
  const handleButtonPress = (buttonType: string) => {
    console.log(`Web app received button press: ${buttonType}`);
  };

  const unistyles = useUnistyles();
  console.log('unistyles', unistyles);

  // You can switch themes using UnistylesRuntime.setTheme()
  // UnistylesRuntime.setTheme('light');
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavigatorProvider route={ExampleStackRouter} />
      </BrowserRouter>
    </div>
  );  
}

export default App; 