// import ShopItem from './ShopItem';
import StoreMainProfile from '../../components/store/StoreMainProfile';
import StoreDetailModal from '@/modal/StoreDetailModal';

const ShopItemPage = () => {
  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      <div className="px-[1.875rem]">
        <StoreMainProfile />
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-[49.1875rem] py-[2.3125rem]">
          <h3>Test Modal UI Here</h3>
          <StoreDetailModal />
          {/* <ShopItem />
          <ShopItem />
        <ShopItem /> */}
        </div>
      </div>
    </div>
  );
};

export default ShopItemPage;
