import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import reducers from './redux/reducers';

/* eslint-disable no-underscore-dangle */
const devTools = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : null;
/* eslint-enable */

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devTools,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App dispatch={store.dispatch} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();