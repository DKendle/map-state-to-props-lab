import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'

import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore } from 'redux';




const store = createStore(manageUsers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store} >
     <App />
  </Provider>
  ,
  document.getElementById('root')
);
