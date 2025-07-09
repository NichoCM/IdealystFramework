import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ExampleTabRouter, } from '@idealyst/navigation/examples';
import { NavigatorProvider } from '@idealyst/navigation';

function App() {
  const handleButtonPress = (buttonType: string) => {
    console.log(`Web app received button press: ${buttonType}`);
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavigatorProvider>
          <ExampleTabRouter />
        </NavigatorProvider>
      </BrowserRouter>
    </div>
  );  
}

export default App; 