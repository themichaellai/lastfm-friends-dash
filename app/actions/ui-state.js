export const SELECT_FRIEND = 'SELECT_FRIEND';
export const selectFriend = function(username) {
  return {
    type: SELECT_FRIEND,
    username,
  };
};
