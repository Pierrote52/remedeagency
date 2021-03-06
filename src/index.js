import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './routes/Router'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./reducers/isLogged.js"


const store = configureStore({reducer:{user:userReducer}})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <Router />
      </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
