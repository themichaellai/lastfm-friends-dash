import { combineReducers } from 'redux';

import friends from './reducers/friends';
import uiState from './reducers/ui-state';

const reducers = combineReducers({
  friends,
  uiState,
});

export default reducers;
