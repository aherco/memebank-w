// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './services/rootReducer.js';

// Middleware
import itemsMiddleware from './services/items/middleware.js';

// Main
import App from './App';
import './index.css';

// Misc
import * as serviceWorker from './serviceWorker';

const middleware = applyMiddleware(
  itemsMiddleware,
);

const store = createStore(rootReducer, middleware);

const app = (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
