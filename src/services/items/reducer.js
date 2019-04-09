import { GET_ITEMS_BY_GUILD_SUCCESS } from './actions.js';

const items = (state = [], action) => {
  switch(action.type) {

  case GET_ITEMS_BY_GUILD_SUCCESS:
    return action.items;

  default:
    return state;
  }
};

export default items;
