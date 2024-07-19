import { instance } from '../axios';

export const deleteAccount = async () => {
  return await instance.delete(`/members`);
};
