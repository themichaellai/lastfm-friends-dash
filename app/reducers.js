import { combineReducers } from 'redux';
import { List } from 'immutable';

import {
  GET_FRIENDS,
  RECIEVE_FRIENDS,
  RECIEVE_RECENT_TRACKS,
} from './actions';

const friends = function(state, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return state;
    case RECIEVE_FRIENDS:
      return List.of(...action.friends);
    case RECIEVE_RECENT_TRACKS:
      const { username, tracks } = action;
      const [userIdx, user] = state.findEntry((u) => (
        u.get('name') === username
      ));
      return state.set(userIdx, user.set('tracks', tracks));
    default:
      if (state === undefined) {
        return List();
      }
      return state;
  }
};

const reducers = combineReducers({
  friends,
});

export default reducers;
