import { instance } from '../axios';
import { END_POINT } from './constants';
import { IRankingReq } from '../../types/community/Ranking.tsx';

export const getRanking = async (data: IRankingReq) => {
  return await instance.get(END_POINT.RANKING, { params: data });
};
