import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';

const Entry = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Entry, document.getElementById('root'));
