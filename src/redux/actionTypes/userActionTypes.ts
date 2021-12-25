import {RegisterModal} from '~modals';

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

export type UserAction = RegisterAction | RegisterSuccessAction;
