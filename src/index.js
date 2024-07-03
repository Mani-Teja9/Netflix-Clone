import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from './components/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <App />
      </WishlistProvider>


    </BrowserRouter>
  </React.StrictMode>,
);


reportWebVitals();
