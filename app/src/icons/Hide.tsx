import type { SVGProps } from "react";

const Hide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="1em"
    height="1em"
    viewBox="0 0 24 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0.999998C7.00001 0.999998 2.73001 4.11 1.00001 8.5C2.73001 12.89 7.00001 16 12 16C17 16 21.27 12.89 23 8.5C21.27 4.11 17 0.999998 12 0.999998ZM12 13.5C9.24001 13.5 7.00001 11.26 7.00001 8.5C7.00001 5.74 9.24001 3.5 12 3.5C14.76 3.5 17 5.74 17 8.5C17 11.26 14.76 13.5 12 13.5ZM12 5.5C10.34 5.5 9.00001 6.84 9.00001 8.5C9.00001 10.16 10.34 11.5 12 11.5C13.66 11.5 15 10.16 15 8.5C15 6.84 13.66 5.5 12 5.5ZM0.927826 15.1799L22.4278 0.179871L23.5722 1.82012L2.07219 16.8201L0.927826 15.1799Z"
      fill="black"
      fillOpacity="0.6"
    />
  </svg>
);

export default Hide;
