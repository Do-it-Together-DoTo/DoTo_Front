import { MyBlob, Slider, Coin } from '@/assets/svg';
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
    <div className="rounded-[0.9375rem] flex items-center justify-center px-8 space-x-60 w-full h-[9.375rem] bg-Light_Layout-100 dark:bg-Dark_Layout-200">
      <div className="flex">
        <MyBlob className="w-[6.8137rem] h-[4.1563rem] mr-4" />
        <div>
          <div className="flex gap-x-[0.625rem] w-[27.1875rem]">
            <div className="text-Light_Text_Name dark:text-Dark_Text_Name font-bold text-[1.8125rem]">
              {profileExample[0].username}
            </div>
            <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_Contents font-nico">
              {profileExample[0].level}
            </div>
          </div>
          <div className="flex items-center">
            <Slider className="w-[11.75rem] h-[0.75rem]" />
            <div className="ml-[0.3125rem] font-nico text-Light_Text_AboutMe dark:text-Dark_Text_Contents text-[0.75rem]">
              27%
            </div>

            {/* <div className="flex items-center ml-auto mr-8">
              <div className="block w-20 h-1 rounded-full bg-Dark_Layout-100">
                <div
                  className="block h-1 rounded-full bg-gradient"
                  style={{ width: `calc(0.05rem*${profileExample[0].experience})` }}
                />
              </div>
              <span className="text-[0.5rem] font-nico text-Light_Text_AboutMe mr-2 absolute right-0 dark:text-Dark_Text_AboutMe">
                {profileExample[0].experience}%
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex items-center h-[1.875rem]">
        <Coin className="w-[1.875rem] h-[1.875rem]" />
        <div className="font-nico text-Light_Text_Name dark:text-Dark_Text_Contents text-[1.75rem]">20</div>
      </div>
    </div>
  );
};

export default StoreMainProfile;
