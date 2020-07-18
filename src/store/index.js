import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './catagories';
import cart from './cart';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({ categories, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();