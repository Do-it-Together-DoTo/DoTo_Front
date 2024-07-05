import { axiosInstance } from '../axiosInstance';
import { END_POINT } from '../constants';
import { IRankingReq } from './Ranking.interface';

export const getRanking = async (data: IRankingReq) => {
  return await axiosInstance.get(END_POINT.RANKING, { params: data });
};
