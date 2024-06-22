import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlusButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" {...props}>
    <path stroke="#898989" strokeLinecap="round" d="M5 1v8m4-4H1" />
  </svg>
);
export default SvgPlusButton;
