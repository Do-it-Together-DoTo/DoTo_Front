import { MyBlob, Coin } from '@/assets/svg';
import { fakerKO as faker } from '@faker-js/faker';

const profileExample = Array.from({ length: 1 }, () => ({
  id: faker.string.uuid(),
  username: faker.person.lastName() + faker.person.firstName(),
  introduction: faker.lorem.sentence(),
  level: faker.number.int({ min: 1, max: 10 }),
  coin: faker.number.int({ min: 0, max: 9999 }),
  experience: faker.number.int({ min: 0, max: 100 }),
}));

const StoreMainProfile = () => {
  return (
    <div className="rounded-[0.9375rem] p-16 flex items-center justify-center w-full h-[9.375rem] gap-x-80 bg-Light_Layout-100 dark:bg-Dark_Layout-200">
      {/* <div className="rounded-[0.9375rem] flex items-center justify-center w-[49.8125rem] h-[9.375rem] bg-Light_Layout-100 dark:bg-Dark_Layout-200"> */}
      <div className="flex">
        <MyBlob className="w-[6.8137rem] h-[4.1563rem] mr-4" />

        <div className="flex flex-col justify-end gap-y-[0.625rem]">
          <div className="flex gap-x-[0.625rem]">
            <div className="text-Light_Text_Name dark:text-Dark_Text_Name font-bold text-[1.8125rem]">
              {profileExample[0].username}
            </div>
            <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_Contents font-nico">
              LV.{profileExample[0].level}
            </div>
          </div>

          <div className="flex items-center">
            <div className="block w-[10rem] h-[0.75rem] rounded-full bg-Dark_Layout-100">
              <div
                className="block h-[0.75rem] rounded-full bg-gradient"
                style={{ width: `calc(0.1rem*${profileExample[0].experience})` }}
              />
            </div>
            <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[0.75rem]">
              {profileExample[0].experience}%
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[1.875rem]">
        <Coin className="w-[1.875rem] h-[1.875rem] mr-2" />
        <div className="font-nico text-Light_Text_Name dark:text-Dark_Text_Contents text-[1.75rem]">
          {profileExample[0].coin}
        </div>
      </div>
    </div>
  );
};

export default StoreMainProfile;
