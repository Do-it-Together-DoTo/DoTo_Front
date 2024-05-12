import ShopItem from '../../components/store/ShopItem';
import StoreMainProfile from '../../components/store/StoreMainProfile';

const ShopCharacterPage = () => {
  return (
    <div>
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      <div className="px-[1.875rem]">
        <StoreMainProfile />
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-[49.1875rem] py-[2.3125rem]">
          <ShopItem itemName={'AAA'} coinValue={100} isRare={true} />
          <ShopItem itemName={'BBB'} coinValue={200} isRare={true} />
          <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
        </div>
      </div>
    </div>
  );
};

export default ShopCharacterPage;
