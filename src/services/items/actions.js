export const GET_ITEMS_BY_CHANNEL = 'GET_ITEMS_BY_CHANNEL';
export const GET_ITEMS_BY_CHANNEL_SUCCESS = 'GET_ITEMS_BY_CHANNEL_SUCCESS';

export const getItemsByChannel = (channelID, page, limit) => {
  return {
    type: GET_ITEMS_BY_CHANNEL,
    channelID,
    page,
    limit,
  };
};

export const getItemsByChannelSuccess = (items) => {
  return {
    type: GET_ITEMS_BY_CHANNEL_SUCCESS,
    items,
  };
};
