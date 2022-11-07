import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Attempt to reference fonts from googleapis.
// const externalFonts = await import('https://fonts.googleapis.com/css?family=McLaren|Montserrat&display=swap');

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
