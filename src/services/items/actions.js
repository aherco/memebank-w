export const GET_ITEMS_BY_GUILD = 'GET_ITEMS_BY_GUILD';
export const GET_ITEMS_BY_GUILD_SUCCESS = 'GET_ITEMS_BY_GUILD_SUCCESS';

export const getItemsByGuild = (guildID) => {
  return {
    type: GET_ITEMS_BY_GUILD,
    guildID,
  };
};

export const getItemsByGuildSuccess = (items) => {
  return {
    type: GET_ITEMS_BY_GUILD_SUCCESS,
    items,
  };
};
