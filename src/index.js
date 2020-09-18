import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'overmind-react';
import store from './store/store';
import Loading from './components/loading/loadingConnected';

render((
  <Provider value={store}>
    <Loading />
    <App />
  </Provider>
), document.querySelector('#root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
