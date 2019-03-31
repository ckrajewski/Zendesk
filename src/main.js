import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HelloWorld from './components/HelloWorld/HelloWorld';
import store from './store/store';

const app = document.getElementById('app');
<<<<<<< HEAD
ReactDOM.render(
  <Provider store={store}>
    <HelloWorld />
  </Provider>,
  app,
);
=======
ReactDOM.render(<Provider store={store}><HelloWorld /></Provider>, app);
>>>>>>> 8081b20ac97f2b9eb03299e46f99dd03e02d0bb2
