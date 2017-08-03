import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';


const defaultState = {
  formOne: {username: '', password: '', id: '', formOneComplete: false},
  formTwo: {firstName: '', lastName:'', phoneNumber:'', formTwoComplete: false},
  formThree: {address: '', city: '', state: '', zip: '', formThreeComplete: false}
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(createBrowserHistory(), store);
export default store;



