import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//tutto l'occorrente per redux
import { Provider } from 'react-redux';//importo per redux
import { combineReducers, configureStore } from '@reduxjs/toolkit'


//qui importo gli stati
const reducer = combineReducers({

})

const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


