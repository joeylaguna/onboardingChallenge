import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage.js';
import App from './App';
import FormOne from './FormOne.js';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App store={store} history={history}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)