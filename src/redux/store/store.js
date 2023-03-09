import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import cartReducer from '../reducers/cartReducer';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({cartReducer, authReducer});

export const store = createStore(rootReducer, composeWithDevTools());
