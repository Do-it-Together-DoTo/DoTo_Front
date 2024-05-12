// import ShopItem from './ShopItem';
import StoreMainProfile from '../../components/store/StoreMainProfile';

const ShopItemPage = () => {
  return (
    <div>
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      <div className="px-[1.875rem]">
        <StoreMainProfile />
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-[49.1875rem] py-[2.3125rem]">
          {/* <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopItemPage;
