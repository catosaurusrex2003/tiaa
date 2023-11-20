import React from "react";

type Props = {
  className?: string;
  callback?: () => void;
};

export default function CommentSVG({ className, callback }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={` ${className}`}
    >
      <path
        d="M6.25 7.375H13.75M6.25 9.875H10M1.875 11.1333C1.875 12.4667 2.81083 13.6283 4.13083 13.8225C5.07167 13.9608 6.0225 14.0667 6.98333 14.1383C7.275 14.16 7.54167 14.3133 7.70417 14.5558L10 18L12.2958 14.5558C12.3764 14.4361 12.4831 14.3362 12.608 14.2639C12.733 14.1915 12.8727 14.1486 13.0167 14.1383C13.971 14.0671 14.9224 13.9617 15.8692 13.8225C17.1892 13.6283 18.125 12.4675 18.125 11.1325V6.1175C18.125 4.7825 17.1892 3.62167 15.8692 3.4275C13.9258 3.14226 11.9642 2.99938 10 3C8.00667 3 6.04667 3.14584 4.13083 3.4275C2.81083 3.62167 1.875 4.78334 1.875 6.1175V11.1325V11.1333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
