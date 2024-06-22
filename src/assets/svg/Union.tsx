import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}>
    <path
      fill="#72767D"
      fillRule="evenodd"
      d="M14.78.215a.723.723 0 0 1 0 1.038L8.4 7.5l6.38 6.246a.723.723 0 0 1 0 1.039.76.76 0 0 1-1.06 0L7.5 8.695l-6.22 6.09a.76.76 0 0 1-1.06 0 .723.723 0 0 1 0-1.039L6.6 7.5.22 1.253a.723.723 0 0 1 0-1.038.76.76 0 0 1 1.06 0l6.22 6.09 6.22-6.09a.76.76 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnion;
