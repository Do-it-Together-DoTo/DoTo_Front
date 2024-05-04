import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRankingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21" {...props}>
    <rect width={19} height={19} x={0.561} y={0.638} fill="#E7E7E7" stroke="#B9BBBE" rx={3.5} />
    <path
      fill="#B9BBBE"
      d="M7.859 14.471v-1.045H9.64V7.794H8.178v-.803c.77-.132 1.298-.33 1.77-.616h.958v7.051h1.584v1.045z"
    />
  </svg>
);
export default SvgRankingIcon;
