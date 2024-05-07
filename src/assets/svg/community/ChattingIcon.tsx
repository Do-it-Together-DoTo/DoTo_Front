import type { SVGProps } from 'react';
const SvgChattingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 16" {...props}>
    <rect width={17.947} height={11} x={3.114} y={1} fill="#E7E7E7" stroke="#B9BBBE" rx={5.5} />
    <ellipse cx={7.877} cy={6.5} fill="#B9BBBE" rx={1.053} ry={1} />
    <ellipse cx={12.088} cy={6.5} fill="#B9BBBE" rx={1.053} ry={1} />
    <ellipse cx={16.299} cy={6.5} fill="#B9BBBE" rx={1.053} ry={1} />
    <path stroke="#B9BBBE" d="M0-.5h6.16" transform="scale(1.0253 .97404)rotate(-45 19.97 6.118)" />
  </svg>
);
export default SvgChattingIcon;
