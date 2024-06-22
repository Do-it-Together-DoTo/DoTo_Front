import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinusButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 1" {...props}>
    <path
      fill="#898989"
      d="M7.951.153C7.908.025 7.764 0 7.63 0L.171.015C.125.02.08.074.05.165.018.259 0 .38 0 .509c0 .127.018.25.05.342C.08.942.125.995.17 1L7.833.985c.045-.006.088-.061.12-.153C7.981.741 8 .62 8 .492c0-.126-.017-.247-.049-.34"
    />
  </svg>
);
export default SvgMinusButton;
