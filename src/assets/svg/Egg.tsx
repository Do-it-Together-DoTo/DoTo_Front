import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEgg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 52 62"
    {...props}
  >
    <path fill="url(#egg_svg__a)" d="M0 0h51.712v62H0z" />
    <defs>
      <pattern id="egg_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#egg_svg__b" transform="scale(.00076 .00063)" />
      </pattern>
      <image
        id="egg_svg__b"
        width={1317}
        height={1579}
      />
    </defs>
  </svg>
);
export default SvgEgg;