import Radio from '@/components/common/radio/Radio';
import { ReactNode } from 'react';

interface MenuItemProps {
  children: ReactNode;
  value: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ children, value }) => {
  return (
    <Radio
      className="flex h-[2.5rem] has-[:checked]:bg-Dark_Text_Name has-[:checked]:border-[0.0835rem] has-[:checked]:border-Dark_Text_AboutMe items-center justify-center rounded-lg bg-Light_Layout-100  w-1/2"
      value={value}
    >
      {children}
    </Radio>
  );
};

export default MenuItem;
