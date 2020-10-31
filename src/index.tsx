import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';

import GlobalStyles from './components/styles/global-style';

import { App } from './components/app';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.querySelector('#root')
);
