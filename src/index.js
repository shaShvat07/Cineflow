import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
// importing mui themes
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './app/store';

const theme = createTheme({});
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
