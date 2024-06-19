import RadioGroup from './RadioGroup';
import Radio from './Radio';
import useRadioStore from '@/store/radioStore';
import { useState } from 'react';

const MenuBar = () => {
  const [value, setValue] = useState('search');
  return (
    <RadioGroup initialValue={value}>
      <Radio value="search">검색</Radio>
      <Radio value="list"> 목록</Radio>
    </RadioGroup>
  );
};

export default MenuBar;
