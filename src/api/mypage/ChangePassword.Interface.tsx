import { instance } from '../axios';
import { ChangePasswordRequest } from './ChangePasswordApi';

export const changePassword = async (data: ChangePasswordRequest) => {
  return await instance.post(`members/password/reset`, data);
};
