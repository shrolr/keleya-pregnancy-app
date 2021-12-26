import {RegisterModal, UserModal} from '~modals';
import * as actions from '../actionTypes/userActionTypes';

export function register(
  registerRequest: RegisterModal,
): actions.RegisterAction {
  return {
    type: actions.REGISTER,
    registerRequest,
  };
}

export function registerSuccess(
  user: RegisterModal,
): actions.RegisterSuccessAction {
  return {
    type: actions.REGISTER_SUCCESS,
    user,
  };
}

export function updateUserInfo(user: UserModal): actions.UpdateUserInfoAction {
  return {
    type: actions.UPDATE_USER_INFO,
    user,
  };
}
