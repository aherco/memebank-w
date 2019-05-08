import request from 'superagent';

import { getItemsByChannelSuccess, GET_ITEMS_BY_CHANNEL } from './actions.js';

const itemsMiddleware = store => next => action => {
  next(action);

  switch(action.type) {

  case GET_ITEMS_BY_CHANNEL:
    const offset = action.page * action.limit;
    console.log(`${process.env.REACT_APP_API_ENDPOINT}/items/channel/${action.channelID}?offset=${offset}&limit=${action.limit}`);
    request
      .get(`${process.env.REACT_APP_API_ENDPOINT}/items/channel/${action.channelID}?offset=${offset}&limit=${action.limit}`)
      .then(res => { console.log(res.body); next(getItemsByChannelSuccess(res.body)); })
      .catch(err => { console.log(err); })
    ;
    break;

  default:
    break;
  }
};

export default itemsMiddleware;
