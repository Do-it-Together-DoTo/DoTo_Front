import useRadioStore from '@/store/radioStore';
import { ReactNode } from 'react';
import { useEffect } from 'react';

interface RadioGroupProps {
  children: ReactNode;
  initialValue: string;
  className: string;
}

const RadioGroup = ({ children, initialValue, className }: RadioGroupProps) => {
  const setCheckedValue = useRadioStore((state) => state.setCheckedValue);

  useEffect(() => {
    setCheckedValue(initialValue);
  }, [initialValue, setCheckedValue]);

  return <fieldset className={className}>{children}</fieldset>;
};

export default RadioGroup;
