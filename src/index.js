import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Firebase/FirebaseConfig";
import App from './App';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// Toastify
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);