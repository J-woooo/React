// 루트 리듀서

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todosRedux';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
