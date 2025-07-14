// Import theme configuration first to ensure Unistyles is properly initialized
// This is needed when using packages from node_modules instead of workspace aliases
import '@idealyst/theme/unistyles';

// Import navigation unistyles after all other imports to ensure it overrides any previous configuration
import '@idealyst/navigation/examples/unistyles';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Hydrate the app if it's SSR, otherwise render normally
const container = document.getElementById('root')!;

if (container.hasChildNodes()) {
  // If the container has child nodes, it means we're hydrating SSR content
  ReactDOM.hydrateRoot(container, 
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
} else {
  // Otherwise, render normally (for development)
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
} 