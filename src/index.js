import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProviderComponent } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProviderComponent>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </AuthProviderComponent>       
    </React.StrictMode>
);


reportWebVitals();