import './App.css';
import { DemoView } from '@idealyst/components';

function App() {
  const handleButtonPress = (buttonType: string) => {
    console.log(`Web app received button press: ${buttonType}`);
  };
  
  return (
    <div className="App">
      <DemoView 
        title="Web App with Navigation"
        subtitle="Cross-platform components + navigation system"
        onButtonPress={handleButtonPress}
        testID="web-home-screen"
      />
    </div>
  );  
}

export default App; 