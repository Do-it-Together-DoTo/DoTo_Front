import { instance } from '../axios';
import { END_POINT } from './constants';
import { IBettingAdd, IBettingJoin } from './Betting.Interface';

//나의 베팅 조회
export const getMyBetting = async () => {
  return await instance.get(END_POINT.MY_BETTING);
};

//베팅 생성
export const addBetting = async (data: IBettingAdd) => {
  return await instance.post<IBettingAdd>(END_POINT.MY_BETTING, data);
};

//오픈 베팅 조회
export const getOpenBetting = async () => {
  return await instance.get(END_POINT.OPEN_BETTING);
};

//베팅 단일 조회
export const getBetting = async (bettingId: number) => {
  return await instance.get(END_POINT.BETTING(bettingId));
};

//베팅 참여
export const joinBetting = async (bettingId: number, data: IBettingJoin) => {
  return await instance.post<IBettingJoin>(END_POINT.BETTING(bettingId), data);
};

//베팅 삭제
export const deleteBetting = async (bettingId: string) => {
  return await instance.delete(bettingId);
};
