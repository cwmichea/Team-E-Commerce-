import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './GlobalStyles'; // adjust path if needed
import { Test } from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
    <App />
    <Test />
    </GlobalStyles>
  </React.StrictMode>
);
