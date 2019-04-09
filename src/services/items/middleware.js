import request from 'superagent';

import { getItemsByGuildSuccess, GET_ITEMS_BY_GUILD } from './actions.js';

const itemsMiddleware = store => next => action => {
  next(action);

  switch(action.type) {

  case GET_ITEMS_BY_GUILD:
    request
      .get(`https://1t7lfirpvc.execute-api.us-east-1.amazonaws.com/dev/items/${action.guildID}`)
      .then(res => { console.log(res.body); next(getItemsByGuildSuccess(res.body)); })
      .catch(err => { console.log(err); })
    ;
    break;

  default:
    break;
  }
};

export default itemsMiddleware;
