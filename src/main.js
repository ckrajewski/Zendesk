import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HelloWorld from './components/HelloWorld/HelloWorld';
import store from './store/store';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  app,
);
