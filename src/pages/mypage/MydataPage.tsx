import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/svg';
import { fakerKO as faker } from '@faker-js/faker';

const MydataPage = () => {
  const data = {
  all: faker.number.int({ min: 1, max: 31 }),
  category1: faker.number.int({ min: 1, max: 10 }),
  category2: faker.number.int({ min: 1, max: 10 }),
  category3: faker.number.int({ min: 1, max: 10 }),
  category4: faker.number.int({ min: 1, max: 10 }),
  };
  const initialMax={
    all:31,
    category1: 10,
    category2: 10,
    category3: 10,
    category4: 10,
  }
  const graphData={
    all:`${(data.all/initialMax.all*31.25).toFixed(3)}rem`,
    category1: `${(data.category1/initialMax.category1*31.25).toFixed(3)}rem`,
    category2: `${(data.category2/initialMax.category2*31.25).toFixed(3)}rem`,
    category3: `${(data.category3/initialMax.category3*31.25).toFixed(3)}rem`,
    category4: `${(data.category4/initialMax.category4*31.25).toFixed(3)}rem`,
  }


  return (
    <div className="flex flex-col items-center w-[calc(100vw-26.1875rem)] h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300">
      <div className="w-[12.875rem] h-[1.875rem] flex justify-center	">
        <ArrowLeftIcon width={30} height={30} />
        <span className="w-[8rem] h-[1.875rem] flex justify-center items-center text-Light_Text_Name">2024년 4월</span>
        <ArrowRightIcon width={30} height={30} />
      </div>
      <div className="mt-[2.5rem] fllex-col w-[49.25rem] h-[31.625rem]  bg-Light_Layout-300 rounded-lg rounded-[0.9375rem] dark:bg-Dark_Layouex ft-200">
        <div className='w-[44.3125rem] h-[1.625rem] flex justify-between items-center'>
          <div className='w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>전체</div>
          <div className='relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10'>
            <div className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-Button`} style={{ width: graphData.all }}/>
          </div>
          <div className='w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>{data.all}/{initialMax.all}</div>
        </div>
              <div className='w-[44.3125rem] h-[1.625rem] flex justify-between items-center'>
          <div className='w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>카테고리1</div>
          <div className='relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10'>
            <div className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-pink`} style={{ width: graphData.category1 }}/>
          </div>
          <div className='w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>{data.category1}/{initialMax.category1}</div>
        </div>
              <div className='w-[44.3125rem] h-[1.625rem] flex justify-between items-center'>
          <div className='w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>카테고리2</div>
          <div className='relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10'>
            <div className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-skyblue`} style={{ width: graphData.category2 }}/>
          </div>
          <div className='w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>{data.category2}/{initialMax.category2}</div>
        </div>
              <div className='w-[44.3125rem] h-[1.625rem] flex justify-between items-center'>
          <div className='w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>카테고리3</div>
          <div className='relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10'>
            <div className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-blue`} style={{ width: graphData.category3 }}/>
          </div>
          <div className='w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>{data.category3}/{initialMax.category3}</div>
        </div>
              <div className='w-[44.3125rem] h-[1.625rem] flex justify-between items-center'>
          <div className='w-[5.4375rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>카테고리4</div>
          <div className='relative w-[31.25rem] h-[1.0625rem] bg-Light_Layout-100 rounded-lg rounded-10'>
            <div className={`absolute h-[1.0625rem] rounded-lg rounded-10 bg-purple`} style={{ width: graphData.category4 }}/>
          </div>
          <div className='w-[3.3125rem] h-[1.5rem] text-[1.25rem] flex justify-center items-center'>{data.category4}/{initialMax.category4}</div>
        </div>

      </div>
    </div>
  );
};

export default MydataPage;
