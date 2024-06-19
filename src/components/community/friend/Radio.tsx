import useRadioStore from '@/store/radioStore';
import { ReactNode } from 'react';

interface RadioProps {
  children: ReactNode;
  value: string;
}

const Radio: React.FC<RadioProps> = ({ children, value }) => {
  const { checkedValue, setCheckedValue } = useRadioStore();
  return (
    <>
      <label className="flex h-[2.5rem] has-[:checked]:bg-Dark_Text_Name has-[:checked]:border-[0.0835rem] has-[:checked]:border-Dark_Text_AboutMe items-center justify-center rounded-lg bg-Light_Layout-100  w-1/2 ">
        <input
          className="hidden"
          type="radio"
          value={value}
          checked={checkedValue === value}
          onChange={(e) => setCheckedValue(e.target.value)}
        />
        {children}
      </label>
    </>
  );
};

export default Radio;
