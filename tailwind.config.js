import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line prettier/prettier
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      Dark_Layout: {
        100: '#202225',
        200: '#292B2F',
        300: '#2F3136',
        400: '#41444B',
      },
      Dark_Text_Name: '#F2F2F2',
      Dark_Text_AboutMe: '#A9AEBB',
      Dark_Text_Contents: '#D0D0D0',
      Dark_CategoryText_Icon: '#B9BBBE',
      Light_Layout: {
        100: '#E7E7E7',
        200: '#F0F0F0',
        300: '#F8F8F8',
        400: '#FDFDFD',
      },
      Light_Text_Name: '#616161',
      Light_Text_AboutMe: '#898989',
      Light_CategoryText_Icon_Contents: '#717171',
      Button: '#5964F2',
      skyblue: '#82D5EF',
      pink: '#EA83AB',
      blue: '#658DDE',
      salmon: '#E39999',
      purple: '#C06EF2',
      yellow: '#FCF898',
      green: '#8EFF9A',
      transparent: 'transparent',
      error: '#F25454',
      Ranking_Bar_Start: '#88A0E9',
      Ranking_Bar_End: '#C7A4F4',
    },
    // backgroundImage: {
    //   gradient: 'linear-gradient(0.25turn,#3F70DD, #B377F3)',
    // },

    fontFamily: {
      pre: ['Pretendard'],
      nico: ['NicoMoji'],
    },

    extend: {},
  },
  plugins: [tailwindScrollbarHide],
};
