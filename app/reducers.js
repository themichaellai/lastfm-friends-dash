import { combineReducers } from 'redux';
import { Map, List } from 'immutable';

import { GET_FRIENDS } from './actions';

const friends = function(state, action) {
  switch (action.type) {
    case GET_FRIENDS:
      return state.push({name: 'michael'})
    default:
      if (state === undefined) {
        return List();
      } else {
        return state;
      }
  }
};

const reducers = combineReducers({
  friends,
});

export default reducers;
