import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RedusxAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
