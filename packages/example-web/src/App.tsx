import './App.css';
import { buildRouter } from '@idealyst/navigation';
import { BrowserRouter } from 'react-router-dom';
import { ExampleStackRouter, ExampleTabRouter } from '@idealyst/navigation/examples';
import { NavigatorProvider } from '@idealyst/navigation';

function App() {
  const handleButtonPress = (buttonType: string) => {
    console.log(`Web app received button press: ${buttonType}`);
  };
  
  return (
    <div className="App">
        <BrowserRouter>
        <NavigatorProvider>
          <ExampleStackRouter />
        </NavigatorProvider>
      </BrowserRouter>
    </div>
  );  
}

export default App; 