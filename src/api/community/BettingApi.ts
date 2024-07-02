import { axiosInstance } from '../axiosInstance';
import { END_POINT } from '../constants';
import { IBettingAdd, IBettingJoin } from './Betting.Interface';

//나의 베팅 조회
export const getMyBetting = async () => {
  return await axiosInstance.get(END_POINT.MY_BETTING);
};

//베팅 생성
export const createBetting = async (data: IBettingAdd) => {
  return await axiosInstance.post<IBettingAdd>(END_POINT.MY_BETTING, data);
};

//오픈 베팅 조회
export const getOpenBetting = async () => {
  return await axiosInstance.get(END_POINT.OPEN_BETTING);
};

//베팅 단일 조회
export const getBetting = async (bettingId: number) => {
  return await axiosInstance.get(END_POINT.BETTING(bettingId));
};

//베팅 참여
export const participateBetting = async (bettingId: number, data: IBettingJoin) => {
  return await axiosInstance.post<IBettingJoin>(END_POINT.BETTING(bettingId), data);
};

//베팅 삭제
export const deleteBetting = async (bettingId: string) => {
  return await axiosInstance.delete(bettingId);
};
