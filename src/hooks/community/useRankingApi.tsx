import { RankingRequest } from '@/types/community/Ranking.tsx';
import { getRanking } from '@/api/community/RankingApi';
const useRankingApi = () => {
  const getRankingData = async (data: RankingRequest) => {
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
