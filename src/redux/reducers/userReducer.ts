import {UserModal} from '~modals';
import * as actions from '../actionTypes/userActionTypes';

export interface UserState {
  user?: UserModal;
  isAuthenticated: boolean;
  isRegistrationInProgress: boolean;
}

const initialState: UserState = {
  isAuthenticated: false,
  isRegistrationInProgress: false,
};

export default function userReducer(
  state: UserState = initialState,
  action: actions.UserAction,
): UserState {
  switch (action.type) {
    case actions.REGISTER:
      return {
        ...state,
        isRegistrationInProgress: true,
      };
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistrationInProgress: false,
        user: action.user,
      };
    default:
      return state;
  }
}
