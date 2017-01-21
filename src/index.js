import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './Containers/root';
import configureStore from './redux/configureStore';
const {store, actions} = configureStore();



ReactDOM.render(
  <Root store={store} actions={actions} />,
  document.getElementById('root')
);
