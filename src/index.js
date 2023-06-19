import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './redux/index'
import { BrowserRouter } from 'react-router-dom';
import { RoutesMap } from './routes';
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RoutesMap />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

