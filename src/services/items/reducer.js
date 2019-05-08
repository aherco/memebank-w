import { 
  GET_ITEMS_BY_CHANNEL_SUCCESS,
  GET_ITEMS_BY_CHANNEL,
} from './actions.js';

const items = (state = null, action) => {
  switch(action.type) {

  case GET_ITEMS_BY_CHANNEL_SUCCESS:
    return action.items;

  case GET_ITEMS_BY_CHANNEL:
    return null;

  default:
    return state;
  }
};

export default items;
