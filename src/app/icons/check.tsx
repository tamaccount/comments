import type { SVGProps } from 'react';

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" {...props}>
    <title>Check</title>
    <g clip-path="url(#clip0_4172_93)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 8C16.5 12.4183 12.9183 16 8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0C12.9183 0 16.5 3.58172 16.5 8ZM12.0303 6.53033L12.5607 6L11.5 4.93934L10.9697 5.46967L7 9.43934L6.03033 8.46967L5.5 7.93934L4.43934 9L4.96967 9.53033L6.46967 11.0303C6.76256 11.3232 7.23744 11.3232 7.53033 11.0303L12.0303 6.53033Z"
        fill="#0070F3"
      />
    </g>
    <defs>
      <clipPath id="clip0_4172_93">
        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
export default Check;
