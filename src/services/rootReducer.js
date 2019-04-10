import { combineReducers } from 'redux';

import items from './items/reducer.js';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
