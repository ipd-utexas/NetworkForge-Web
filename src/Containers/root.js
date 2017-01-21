/**
 * Created by old on 1/12/17.
 */
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

export const Root = ({store, actions}) => {
  return (
      <Provider store={store}>
        <App actions={actions} />
      </Provider>
  );
}

export default Root;