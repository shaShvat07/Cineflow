import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
// importing mui themes
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './components/App.jsx';

const theme = createTheme({});
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
