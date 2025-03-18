import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // Ensure this is correctly linked to your styles

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
