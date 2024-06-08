import type { SVGProps } from 'react';
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 5" {...props}>
    <rect width={99.322} height={4.972} fill="#18191C" rx={2.486} transform="matrix(1 0 0 -1 0 5)" />
    <rect width={32.094} height={4.376} fill="url(#Slider_svg__a)" rx={2.188} transform="matrix(1 0 0 -1 0 5)" />
    <defs>
      <linearGradient id="Slider_svg__a" x1={0} x2={32.094} y1={2.918} y2={2.918} gradientUnits="userSpaceOnUse">
        <stop stopColor="#3F70DD" />
        <stop offset={1} stopColor="#B377F3" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSlider;
