import * as React from 'react';

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.2295 9.08847e-05H1.77049C1.30629 -0.0046333 0.859174 0.174984 0.52725 0.499529C0.195326 0.824074 0.00570713 1.26704 0 1.73123V22.2727C0.00673925 22.7362 0.196812 23.1782 0.528624 23.5019C0.860435 23.8256 1.30696 24.0046 1.77049 23.9999H22.2295C22.6937 24.0036 23.1406 23.8234 23.4723 23.4986C23.8041 23.1739 23.9938 22.731 24 22.2668V1.72532C23.9917 1.2625 23.8011 0.821646 23.4696 0.49859C23.138 0.175535 22.6924 -0.00361171 22.2295 9.08847e-05V9.08847e-05ZM7.11541 20.459H3.55279V8.99609H7.11541V20.459ZM5.34492 7.43413C4.9363 7.43452 4.53675 7.31371 4.19681 7.08698C3.85687 6.86025 3.59181 6.53779 3.43517 6.16039C3.27853 5.783 3.23735 5.36762 3.31683 4.96681C3.39631 4.566 3.59288 4.19777 3.88167 3.9087C4.17047 3.61963 4.53852 3.42271 4.93925 3.34285C5.33999 3.26299 5.75541 3.30378 6.13296 3.46006C6.51051 3.61634 6.83322 3.88109 7.06028 4.22081C7.28733 4.56053 7.40852 4.95996 7.40852 5.36858C7.40801 5.64016 7.35394 5.90898 7.24941 6.15964C7.14488 6.41031 6.99195 6.6379 6.79936 6.82939C6.60677 7.02088 6.37831 7.17251 6.12705 7.27561C5.87579 7.3787 5.60667 7.43123 5.33508 7.4302L5.34492 7.43413ZM20.459 20.459H16.8964V14.8819C16.8964 13.5541 16.8728 11.8446 15.0452 11.8446C13.2177 11.8446 12.9069 13.2924 12.9069 14.7954V20.459H9.35016V8.99609H12.7652V10.5698H12.8125C13.2885 9.66887 14.4492 8.71871 16.1823 8.71871C19.7902 8.71084 20.459 11.0853 20.459 14.1639V20.459Z"
        fill={props.fill || 'black'}
      />
    </svg>
  );
}

export default Linkedin;