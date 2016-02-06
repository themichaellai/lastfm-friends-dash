import { List, Map } from 'immutable';

import {
  GET_FRIENDS,
  RECIEVE_FRIENDS,
  RECIEVE_RECENT_TRACKS,
} from '../actions/last-fm';

const friends = function(state, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return state;
    case RECIEVE_FRIENDS:
      const { friendsOrder } = action;
      return state.merge({
        friends: action.friends,
        friendsOrder,
      });
    case RECIEVE_RECENT_TRACKS:
      const { username, tracks } = action;
      return state.setIn(['friends', username, 'tracks'], tracks);
    default:
      if (state === undefined) {
        return Map({
          friends: Map(),
          friendsOrder: List(),
        });
      }
      return state;
  }
};

export default friends;
