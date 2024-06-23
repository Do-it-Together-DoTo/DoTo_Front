import RadioGroup from '@/components/common/radio/RadioGroup';
import { ReactNode } from 'react';

interface MenuGroupProps {
  children: ReactNode;
  initialValue: string;
}
const MenuGroup: React.FC<MenuGroupProps> = ({ children, initialValue }) => {
  return (
    <RadioGroup initialValue={initialValue} className="flex w-[26rem] h-[2.5rem] bg-Light_Layout-100 rounded-lg">
      {children}
    </RadioGroup>
  );
};

export default MenuGroup;
