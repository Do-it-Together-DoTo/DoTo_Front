import ShopCharacter from '@/components/store/ShopCharacter';
import StoreMainProfile from '@/components/store/StoreMainProfile';
import StoreCharBuyModal from '@/modal/store/StoreCharBuyModal';

const ShopItemPage = () => {
  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      {/* 스크롤할 div height 정확하게 지정 */}
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          <StoreCharBuyModal />
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full">
            <ShopCharacter characterName={'캐릭터1'} coinValue={200} />
            <ShopCharacter characterName={'캐릭터2'} coinValue={300} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
            <ShopCharacter characterName={'캐릭터3'} coinValue={400} />
          </div>
          {/* <h3>Modal UI Test</h3>
        <StoreDetailModal /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopItemPage;
