import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" {...props}>
    <g clipPath="url(#sunIcon_svg__a)">
      <path
        fill="#41444B"
        d="M6.563 2.875V1.469a.469.469 0 0 1 .937 0v1.406a.469.469 0 0 1-.937 0m.468 1.406a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-4.081.332a.469.469 0 1 0 .663-.663l-.938-.938a.469.469 0 1 0-.663.663zm0 6.837-.938.937a.47.47 0 0 0 .663.663l.938-.937a.47.47 0 0 0-.663-.663m7.831-6.7a.47.47 0 0 0 .332-.137l.937-.938a.47.47 0 0 0-.663-.663l-.937.938a.469.469 0 0 0 .331.8m.332 6.7a.47.47 0 0 0-.663.663l.937.937a.47.47 0 0 0 .663 0 .47.47 0 0 0 0-.663zM2.343 8.03a.47.47 0 0 0-.468-.469H.469a.469.469 0 0 0 0 .938h1.406a.47.47 0 0 0 .469-.469m4.688 4.688a.47.47 0 0 0-.468.469v1.406a.469.469 0 0 0 .937 0v-1.406a.47.47 0 0 0-.469-.47m6.563-5.156h-1.406a.47.47 0 0 0 0 .937h1.406a.469.469 0 0 0 0-.937"
      />
    </g>
    <defs>
      <clipPath id="sunIcon_svg__a">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunIcon;
