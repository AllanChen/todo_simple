import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import MainApp from './MainApp'
import {createStore} from 'redux';
import logger from 'redux-logger'
const  store = createStore(reducer,logger,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store= {store}>
  <MainApp />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
