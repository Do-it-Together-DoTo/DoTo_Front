import { instance } from '../axios';
import { MydataResponse } from './Mydata.Interface';
export const getMydata = async () => {
  return await instance.get<MydataResponse>(`/recoreds`, {
    params: {
      year: String,
      month: String,
    },
  });
};
