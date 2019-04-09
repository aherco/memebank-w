import { combineReducers } from 'redux';

import items from './items/reducer.js';

const root = combineReducers({
  items,
});

export default root;
