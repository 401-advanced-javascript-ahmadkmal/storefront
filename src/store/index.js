import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './catagories';
import cart from './cart';

const rootReducer = combineReducers({ categories, cart });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();