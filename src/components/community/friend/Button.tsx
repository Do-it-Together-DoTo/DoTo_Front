import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  color: 'gray' | 'dark' | 'blue';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[4.375rem] h-[1.5625rem]  mb:h-[1.5rem] text-[0.625rem] rounded-[0.6875rem] 
      ${
        color === 'gray'
          ? 'bg-Light_Layout-100 text-Light_Text_AboutMe dark:text-Dark_Text_AboutMe'
          : color === 'blue'
            ? ' bg-Button text-Light_Layout-400  dark:text-Dark_CategoryText_Icon'
            : 'bg-Light_CategoryText_Icon_Contents text-Light_Layout-400   dark:text-Dark_CategoryText_Icon'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
