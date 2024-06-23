import { ReactNode } from 'react';

export interface CheckboxProps {
  children: ReactNode;
  checked?: boolean;
  className?: string;
  onChange: (arg: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({ children, checked, className, onChange }) => {
  return (
    <>
      <label className={className}>
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        {children}
      </label>
    </>
  );
};

export default CheckBox;
