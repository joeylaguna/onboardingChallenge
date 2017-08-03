import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import formOne from './formOne.js';
import formTwo from './formTwo.js';
import formThree from './formThree.js';

const rootReducer = combineReducers({formOne, formTwo, formThree, routing: routerReducer});

export default rootReducer;