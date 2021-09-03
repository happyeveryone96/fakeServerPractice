// LIBRARY
import React from 'react';
import { Provider } from 'react-redux';

import Main from './Main';

import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
