import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
