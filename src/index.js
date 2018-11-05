import React from 'react';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import rootReducer from './reducers/products';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)