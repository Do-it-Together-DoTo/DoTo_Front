import { useState } from 'react';
import MenuItem from './MenuItem';
import MenuGroup from './MenuGroup';

const MenuBar = () => {
  const [value] = useState('search');
  return (
    <MenuGroup initialValue={value}>
      <MenuItem value="search">검색</MenuItem>
      <MenuItem value="list">목록</MenuItem>
    </MenuGroup>
  );
};

export default MenuBar;
