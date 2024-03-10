import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
// importing mui themes
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import './index.css';
import store from './app/store';
import ToggleColorModeProvider from './utils/ToggleColorMode';
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>,
  document.getElementById('root'),
);
