import { IRankingReq } from '@/api/community/Ranking.interface';
import { getRanking } from '@/api/community/RankingApi';
const useRankingApi = () => {
  const getRankingData = async (data: IRankingReq) => {
    try {
      const response = await getRanking(data);
      return response.data.body;
    } catch (error) {
      console.log(error);
    }
  };

  return { getRankingData };
};

export default useRankingApi;
