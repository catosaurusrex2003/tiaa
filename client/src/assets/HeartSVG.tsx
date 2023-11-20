import React from "react";

type Props = {
  className?: string;
  callback?: () => void;
};

export default function HeartSVG({ className, callback }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      className={`w-5 h-5 ${className}`}
    >
      <path
        d="M13.9946 5.64453C13.9946 3.98786 12.5953 2.64453 10.8693 2.64453C9.5793 2.64453 8.4713 3.3952 7.99463 4.46653C7.51796 3.3952 6.40996 2.64453 5.1193 2.64453C3.39463 2.64453 1.99463 3.98786 1.99463 5.64453C1.99463 10.4579 7.99463 13.6445 7.99463 13.6445C7.99463 13.6445 13.9946 10.4579 13.9946 5.64453Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
