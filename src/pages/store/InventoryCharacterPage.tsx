import InventoryCharacter from '../../components/store/InventoryCharacter';
import StoreMainProfile from '../../components/store/StoreMainProfile';
import { fakerKO as faker } from '@faker-js/faker';
import { useState } from 'react';

const initialFollowers = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  username: faker.person.lastName() + faker.person.firstName(),
  introduction: faker.lorem.sentence(),
  level: faker.number.int({ min: 1, max: 10 }),
  coin: faker.number.int({ min: 0, max: 9999 }),
  experience: faker.number.int({ min: 0, max: 100 }),
}));

const InventoryCharacterPage = () => {
  const [followers, setFollowers] = useState(initialFollowers);

  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        보관함
      </div>
      <div className="px-[1.875rem]">
        <StoreMainProfile />
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-[49.1875rem] py-[2.3125rem]">
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
          <InventoryCharacter />
        </div>
      </div>
    </div>
  );
};

export default InventoryCharacterPage;
