import { Map } from 'immutable';

import {
  SELECT_FRIEND,
} from '../actions/ui-state';

const uiState = function(state, action) {
  switch (action.type) {
    case SELECT_FRIEND:
      return state.set('selectedFriend', action.username);
    default:
      if (state === undefined) {
        return Map({
          selectedFriend: undefined,
        });
      }
      return state;
  }
};

export default uiState;
