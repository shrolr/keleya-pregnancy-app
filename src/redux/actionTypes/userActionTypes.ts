import {RegisterModal, UserModal} from '~modals';

export const REGISTER = 'REGISTER';
export interface RegisterAction {
  type: typeof REGISTER;
  registerRequest: RegisterModal;
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  user: RegisterModal;
}

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export interface UpdateUserInfoAction {
  type: typeof UPDATE_USER_INFO;
  user: UserModal;
}

export type UserAction =
  | RegisterAction
  | RegisterSuccessAction
  | UpdateUserInfoAction;
