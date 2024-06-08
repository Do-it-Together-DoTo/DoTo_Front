import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/svg';
import { fakerKO as faker } from '@faker-js/faker';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const MydataPage = () => {
  const data = {
    all: faker.number.int({ min: 1, max: 31 }),
    category1: faker.number.int({ min: 1, max: 10 }),
    category2: faker.number.int({ min: 1, max: 10 }),
    category3: faker.number.int({ min: 1, max: 10 }),
    category4: faker.number.int({ min: 1, max: 10 }),
  };
  const initialMax = {
    all: 31,
    category1: 10,
    category2: 10,
    category3: 10,
    category4: 10,
  };
  const graphData = {
    all: `${((data.all / initialMax.all) * 31.25).toFixed(3)}rem`,
    category1: `${((data.category1 / initialMax.category1) * 31.25).toFixed(3)}rem`,
    category2: `${((data.category2 / initialMax.category2) * 31.25).toFixed(3)}rem`,
    category3: `${((data.category3 / initialMax.category3) * 31.25).toFixed(3)}rem`,
    category4: `${((data.category4 / initialMax.category4) * 31.25).toFixed(3)}rem`,
  };
  const today = new Date();
  const [titleYear, setTitleYear] = useState(today.getFullYear());
  const [titleMonth, setTitleMonth] = useState(today.getMonth());

  const ArrowLeftHandler = () => {
    if (titleMonth === 1) {
      setTitleMonth(12);
      setTitleYear(titleYear - 1);
    } else {
      setTitleMonth(titleMonth - 1);
    }
  };
  const ArrowRightHandler = () => {
    if (titleMonth === 12) {
      setTitleMonth(1);
      setTitleYear(titleYear + 1);
    } else {
      setTitleMonth(titleMonth + 1);
    }
  };
  ChartJS.register(ArcElement, Tooltip, Legend);
  const Data = {
    labels: ['성공', '실패'],
    datasets: [
      {
        data: [62, 38],
        backgroundColor: ['#ffeb9b', '#b5f2ff'],
        borderColor: ['#ffeb9b', '#b5f2ff'],
      },
    ],
  };
  const Options = {};

  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(screen-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <div className="mt-[2.125rem] w-[12.875rem] h-[1.875rem] flex justify-center	">
        <ArrowLeftIcon
          width="30"
          height="30"
          className="fill-Light_Text_Name dark:fill-Dark_Text_Name"
          onClick={ArrowLeftHandler}
        />
        <span className="w-[8rem] h-[1.875rem] flex justify-center items-center text-Light_Text_Name font-semibold dark:text-Dark_Text_Name">
          {titleYear}년 {titleMonth}월
        </span>
        <ArrowRightIcon
          width="30"
          height="30"
          className="fill-Light_Text_Name dark:fill-Dark_Text_Name"
          onClick={ArrowRightHandler}
        />
      </div>
      <div className="mt-[2.5rem] flex flex-col items-center w-[49.25rem] h-[31.625rem] bg-Light_Layout-300 rounded-[0.9375rem] dark:bg-Dark_Layout-400">
        <div className="mt-[1.875rem] w-[8.5rem] h-[1.8125rem] font-semibold text-[1.5rem] text-Light_Text_Name dark:text-Dark_Text_Name">
          나의 투두 기록
        </div>
        <div className="mt-[2.75rem] w-[44.3125rem] h-[1.625rem] flex justify-between items-center">
          <div className="w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            전체
          </div>
          <div className="relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10">
            <div
              className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-Button`}
              style={{ width: graphData.all }}
            />
          </div>
          <div className="w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center dark:text-Dark_Text_Name">
            {data.all}/{initialMax.all}
          </div>
        </div>
        <div className="mt-[3.25rem] w-[44.3125rem] h-[1.625rem] flex justify-between items-center">
          <div className="w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            카테고리1
          </div>
          <div className="relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100  rounded-lg rounded-10">
            <div
              className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-pink`}
              style={{ width: graphData.category1 }}
            />
          </div>
          <div className="w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            {data.category1}/{initialMax.category1}
          </div>
        </div>
        <div className="mt-[3.25rem] w-[44.3125rem] h-[1.625rem] flex justify-between items-center">
          <div className="w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            카테고리2
          </div>
          <div className="relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10">
            <div
              className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-skyblue`}
              style={{ width: graphData.category2 }}
            />
          </div>
          <div className="w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            {data.category2}/{initialMax.category2}
          </div>
        </div>
        <div className="mt-[3.25rem] w-[44.3125rem] h-[1.625rem] flex justify-between items-center">
          <div className="w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            카테고리3
          </div>
          <div className="relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10">
            <div
              className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-blue`}
              style={{ width: graphData.category3 }}
            />
          </div>
          <div className="w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            {data.category3}/{initialMax.category3}
          </div>
        </div>
        <div className="mt-[3.25rem] w-[44.3125rem] h-[1.625rem] flex justify-between items-center">
          <div className="w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            카테고리4
          </div>
          <div className="relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10">
            <div
              className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-purple`}
              style={{ width: graphData.category4 }}
            />
          </div>
          <div className="w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center text-Light_Text_Name dark:text-Dark_Text_Name">
            {data.category4}/{initialMax.category4}
          </div>
        </div>
      </div>
      <div className="mt-[2.5rem] flex flex-col items-center w-[49.25rem] h-[45.8125rem] bg-Light_Layout-300 rounded-[0.9375rem] dark:bg-Dark_Layout-400">
        <div className="mt-[1.875rem] w-[8.5rem] h-[1.8125rem] font-semibold text-[1.5rem] text-Light_Text_Name dark:text-Dark_Text_Name">
          나의 코인 기록
        </div>
        <div className="mt-[3.8125rem] w-[41.125rem] h-[9.375rem] flex justify-between">
          <div className="w-[19.8125rem] h-[9.375rem] flex flex-col items-center bg-Light_Layout-400 dark:bg-Dark_Layout-300 rounded-lg">
            <div className="mt-[1.875rem] w-[13.8125rem] h-[2.25rem] flex justify-between">
              <div className="w-[4.875rem] h-[2.25rem] flex justify-center items-center">
                <div className="w-[1.125rem] h-[1.125rem] bg-Button rounded-full"></div>
                <div className="ml-[0.4375rem] flex justify-center items-center w-[3.25rem] h-[2.25rem] font-semibold text-[1.25rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
                  사용량
                </div>
              </div>
              <div className="w-[4.875rem] h-[2.25rem] flex justify-center items-center">
                <div className="font-semibold text-Button text-[2rem]">134</div>
                <div className="font-semibold text-Light_Text_Name dark:text-Dark_Text_Name text-[1.25rem]">개</div>
              </div>
            </div>
            <div className="mt-[0.875rem] w-[13.8125rem] h-[2.25rem] flex justify-between">
              <div className="w-[4.875rem] h-[2.25rem] flex justify-center items-center">
                <div className="w-[1.125rem] h-[1.125rem] bg-Light_Layout-100 rounded-full"></div>
                <div className="ml-[0.4375rem] flex justify-center items-center w-[3.25rem] h-[2.25rem] font-semibold text-[1.25rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
                  획득량
                </div>
              </div>
              <div className="w-[4.875rem] h-[2.25rem] flex justify-center items-center">
                <div className="font-semibold text-Button text-[2rem]">345</div>
                <div className="font-semibold text-Light_Text_Name dark:text-Dark_Text_Name text-[1.25rem]">개</div>
              </div>
            </div>
          </div>
          <div className="w-[19.8125rem] h-[9.375rem] flex flex-col items-center bg-Light_Layout-400 dark:bg-Dark_Layout-300 rounded-lg">
            <div className="mt-[1.75rem] text-[1.25rem] font-semibold text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              내가 연 베팅
            </div>
            <div className="mt-[1rem] flex justify-center items-center">
              <div className="font-semibold text-Button text-[2.25rem]">345</div>
              <div className="font-semibold text-Light_Text_Name dark:text-Dark_Text_Name text-[2.25rem]">회</div>
            </div>
          </div>
        </div>
        <div className="mt-[2.125rem] w-[41.125rem] h-[23.8125rem] flex justify-between">
          <div className="w-[19.8125rem] h-[23.8125rem] flex flex-col items-center bg-Light_Layout-400 dark:bg-Dark_Layout-300 rounded-lg">
            <div className="mt-[1rem] font-semibold text-[1.25rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              베팅 승률
            </div>
            <div className="w-[13.75rem] h-[13.75rem]">
              <Doughnut data={Data} options={Options}></Doughnut>
            </div>
            <div className="w-[4.875rem] h-[2.25rem] flex justify-center items-center">
              <div className="font-semibold text-Button text-[2rem]">38</div>
              <div className="font-semibold text-Light_Text_Name dark:text-Dark_Text_Name text-[2rem]">%</div>
            </div>
            <div className="font-semibold text-[1.25rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              4회 참여
            </div>
          </div>
          <div className="w-[19.8125rem] h-[23.8125rem] flex flex-col items-center bg-Light_Layout-400 dark:bg-Dark_Layout-300 rounded-lg">
            <div className="mt-[1rem] font-semibold text-[1.25rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              베팅 수익률
            </div>

            <div className="w-[13.75rem] h-[13.75rem]">
              <Doughnut data={Data} options={Options}></Doughnut>
            </div>
            <div className="w-[4.875rem] h-[2.25rem] flex justify-center items-center">
              <div className="font-semibold text-Button text-[2rem]">38</div>
              <div className="font-semibold text-Light_Text_Name dark:text-Dark_Text_Name text-[2rem]">%</div>
            </div>
            <div className="font-semibold text-[1.25rem] text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe">
              182개 획득
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MydataPage;
