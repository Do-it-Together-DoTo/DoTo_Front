import useRadioStore from '@/store/radioStore';
import { ReactNode } from 'react';

export interface RadioProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({ children, value, className }) => {
  const { checkedValue, setCheckedValue } = useRadioStore();
  return (
    <>
      <label className={className}>
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
