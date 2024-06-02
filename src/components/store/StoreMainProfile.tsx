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

// 다른 페이지들은 width 조정 따로 안해도 w-full 잘 차는데
// 내 페이지만 오른쪽으로 더 넘어가서 스크롤링됨
// >>> MainProfile 기본 width 지정 문제였음 ( 극단적으로 줄이니까 일단 스크롤은 안되는거 확인 )
// 이 안에서 gap 조절
// space-x-40으로 줄여봄 >> 이걸로 조정

const StoreMainProfile = () => {
  return (
    <div className="rounded-[0.9375rem] flex items-center justify-center w-[49.8125rem] h-[9.375rem] bg-Light_Layout-100 dark:bg-Dark_Layout-200">
      <div className="flex">
        <MyBlob className="w-[6.8137rem] h-[4.1563rem] mr-4" />
        <div className="flex flex-col justify-end gap-y-[0.625rem]">
          <div className="flex w-[27.1875rem] gap-x-[0.625rem] mb-[0.625rem]">
            <div className="text-Light_Text_Name dark:text-Dark_Text_Name font-bold text-[1.8125rem]">
              {profileExample[0].username}
            </div>
            <div className="content-end text-Light_Text_AboutMe dark:text-Dark_Text_Contents font-nico">
              LV.{profileExample[0].level}
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
