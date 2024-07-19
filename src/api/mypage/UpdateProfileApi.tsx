import { instance } from '../axios';
import { MyChracterResponse, AccountInfo } from './UpdateProfile.Interface';

export const getMyCharacter = async () => {
  return await instance.get<MyChracterResponse>(`/members/characters`);
};

export const changeMainCharacter = async (characterId: string) => {
  return await instance.patch(`members/characters/${characterId}`);
};

export const changeAccountInfo = async (data: AccountInfo) => {
  return await instance.patch<AccountInfo>(`members/modify`, data);
};
