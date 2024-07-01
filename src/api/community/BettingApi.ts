import { axiosInstance } from '../axiosInstance';
import { END_POINT } from '../constants';

//나의 베팅 조회
export const getMyBetting = () => {
  return axiosInstance.get(END_POINT.MY_BETTING);
};

//베팅 생성
export const createBetting = () => {
  return axiosInstance.post(END_POINT.MY_BETTING);
};

//오픈 베팅 조회
export const getOpenBetting = () => {
  return axiosInstance.get(END_POINT.OPEN_BETTING);
};

//베팅 단일 조회
export const getBetting = (bettingId: string) => {
  return axiosInstance.get(END_POINT.BETTING(bettingId));
};

//베팅 참여
export const participateBetting = (bettingId: string) => {
  return axiosInstance.post(END_POINT.BETTING(bettingId));
};

//베팅 삭제
export const deleteBetting = (bettingId: string) => {
  return axiosInstance.delete(bettingId);
};
