import { combineReducers } from 'redux';
import { List } from 'immutable';

import {
  GET_FRIENDS,
  RECIEVE_FRIENDS,
} from './actions';

const friends = function(state, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return state;
    case RECIEVE_FRIENDS:
      return List.of(...action.friends);
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
