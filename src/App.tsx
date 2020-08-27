import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Board } from './components';

const App = () => (
  <Provider store={store}>
    <Board />
  </Provider>
);

export default App;
