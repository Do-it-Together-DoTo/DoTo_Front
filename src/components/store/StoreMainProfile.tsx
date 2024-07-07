import { MyBlob, Coin } from '@/assets/svg';

import { useState, useEffect } from 'react';
import { instance } from '@/api/axios';

const StoreMainProfile = () => {
  const [user, setUser] = useState<{
    nickname: string;
    description: string;
    mainCharacterExp: number;
    mainCharacterLevel: number;
    mainCharacterImg: string;
    coin: number;
  } | null>(null);

  useEffect(() => {
    instance
      .get('/members')
      .then((res) => {
        setUser(res.data.body);
        console.log('응답 완료:', res.data.body);
      })
      .catch((err) => {
        console.log('응답 실패:', err);
      });
  }, []);

  if (user) {
    return (
      <div className="rounded-[0.9375rem] p-16 flex items-center justify-between w-full h-[9.375rem] bg-Light_Layout-100 dark:bg-Dark_Layout-200">
        <div className="flex">
          <MyBlob className="w-[6.8137rem] h-[4.1563rem] mr-4" />

          <div className="flex flex-col justify-end gap-y-[0.625rem]">
            <div className="flex gap-x-[0.625rem]">
              <div className="text-Light_Text_Name dark:text-Dark_Text_Name font-bold text-[1.8125rem]">
                {user.nickname}
              </div>
              <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_Contents font-nico">
                LV.{user.mainCharacterLevel}
              </div>
            </div>

            <div className="flex items-center">
              <div className="block w-[10rem] h-[0.75rem] rounded-full bg-Dark_Layout-100">
                <div
                  className="block h-[0.75rem] rounded-full bg-gradient"
                  style={{ width: `calc(0.1rem*${user.mainCharacterExp})` }}
                />
              </div>
              <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[0.75rem]">
                {user.mainCharacterExp}%
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-[1.875rem]">
          <Coin className="w-[1.875rem] h-[1.875rem] mr-2" />
          <div className="font-nico text-Light_Text_Name dark:text-Dark_Text_Contents text-[1.75rem]">{user.coin}</div>
        </div>
      </div>
    );
  }
};

export default StoreMainProfile;
