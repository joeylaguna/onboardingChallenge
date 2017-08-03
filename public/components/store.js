import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './../reducers/index';

const defaultState = {
  formOne: false,
  formTwo: false
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);


export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;


