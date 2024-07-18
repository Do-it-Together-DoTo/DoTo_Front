import { instance } from '../axios';
import { END_POINT } from './constants';
import { IRankingReq } from './Ranking.interface';

export const getRanking = async (data: IRankingReq) => {
  return await instance.get(END_POINT.RANKING, { params: data });
};
