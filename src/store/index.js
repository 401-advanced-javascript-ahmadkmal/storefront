import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './catagories';

const rootReducer = combineReducers({ categories });

const store = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default store();