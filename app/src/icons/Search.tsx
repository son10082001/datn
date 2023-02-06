import type { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <span className="close-btn close-btn-default" role="button">
    <svg
      {...props}
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="text-lg"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </span>
);

export default SearchIcon;
