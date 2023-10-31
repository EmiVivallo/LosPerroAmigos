import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GradientBackground from './componentes/GradientBackground';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GradientBackground />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
