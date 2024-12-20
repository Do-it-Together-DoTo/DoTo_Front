import { instance } from '../axios';
import { END_POINT } from './constants';
import { RankingRequest, } from '../../types/community/Ranking.tsx';

export const getRanking = async (data: RankingRequest,) => {
  return await instance.get(END_POINT.RANKING, { params: data });
};
