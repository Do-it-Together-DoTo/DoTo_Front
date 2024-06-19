import useRadioStore from '@/store/radioStore';
import { ReactNode } from 'react';
import { useEffect } from 'react';

interface RadioGroupProps {
  children: ReactNode;
  initialValue: string;
}

const RadioGroup = ({ children, initialValue }: RadioGroupProps) => {
  const setCheckedValue = useRadioStore((state) => state.setCheckedValue);

  useEffect(() => {
    setCheckedValue(initialValue);
  }, [initialValue, setCheckedValue]);

  return <fieldset className="flex w-[26rem] h-[2.5rem] bg-Light_Layout-100 rounded-lg">{children}</fieldset>;
};

export default RadioGroup;
