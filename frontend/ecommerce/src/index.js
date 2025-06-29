import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './GlobalStyles'; // adjust path if needed
import { LanguageProvider } from './Components/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    </GlobalStyles>
  </React.StrictMode>
);
