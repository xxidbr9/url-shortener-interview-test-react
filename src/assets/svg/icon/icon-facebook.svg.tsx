import { SVGProps } from 'react';

export const IconFacebookSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={31}
    viewBox="0 0 31 31"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M29.788 0H2.211C1.266 0 .5.766.5 1.711V29.29c0 .944.766 1.71 1.711 1.71H17.06V18.995h-4.04v-4.678h4.04v-3.45c0-4.004 2.445-6.185 6.018-6.185 1.711 0 3.181.128 3.61.185v4.185l-2.477.001c-1.943 0-2.319.924-2.319 2.277v2.988h4.634l-.604 4.679h-4.03V31h7.9a1.71 1.71 0 0 0 1.709-1.712V1.711C31.5.766 30.734 0 29.788 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h31v31H.5z" />
      </clipPath>
    </defs>
  </svg>
);
