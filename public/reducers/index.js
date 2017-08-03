import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import formOne from './formOne.js';
import formTwo from './formTwo.js';

const rootReducer = combineReducers({formOne, formTwo, routing: routerReducer});

export default rootReducer;