import type { SVGProps } from 'react';
const SvgModifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" {...props}>
    <path d="M27.863 4.137a3.2 3.2 0 0 0-4.526 0L11.2 16.275V20.8h4.526L27.863 8.663a3.2 3.2 0 0 0 0-4.526" />
    <path
      fillRule="evenodd"
      d="M3.2 9.6a3.2 3.2 0 0 1 3.2-3.2h6.4a1.6 1.6 0 1 1 0 3.2H6.4v16h16v-6.4a1.6 1.6 0 0 1 3.2 0v6.4a3.2 3.2 0 0 1-3.2 3.2h-16a3.2 3.2 0 0 1-3.2-3.2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgModifyIcon;
