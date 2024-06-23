import { SwitchIcon } from '@/assets/svg/community';
import Checkbox from '@/components/common/checkbox/Checkbox';
import { useState } from 'react';

const OrderToggle = () => {
  const [isAcquireOrder, setIsAcquireOrder] = useState(true);
  return (
    <Checkbox
      className="flex [&>input]:hidden text-Dark_Text_AboutMe"
      checked={isAcquireOrder}
      onChange={setIsAcquireOrder}
    >
      <SwitchIcon width={'0.75rem'} />
      {isAcquireOrder ? '코인 획득순' : '코인 소비순'}
    </Checkbox>
  );
};

export default OrderToggle;
