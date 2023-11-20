import React from "react";

type Props = {
  className?: string;
  callback?: () => void;
};

export default function HouseSVG({ className, callback }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={` ${className}`}
    >
      <path
        d="M9.5584 3.20009C9.67559 3.08305 9.83444 3.01731 10.0001 3.01731C10.1657 3.01731 10.3245 3.08305 10.4417 3.20009L17.6834 10.4418C17.7406 10.5032 17.8096 10.5524 17.8863 10.5866C17.9629 10.6207 18.0457 10.6391 18.1296 10.6406C18.2136 10.6421 18.2969 10.6266 18.3747 10.5952C18.4526 10.5638 18.5232 10.517 18.5826 10.4576C18.6419 10.3983 18.6887 10.3276 18.7202 10.2498C18.7516 10.1719 18.767 10.0886 18.7656 10.0047C18.7641 9.92074 18.7457 9.83798 18.7115 9.76131C18.6774 9.68465 18.6281 9.61565 18.5667 9.55843L11.3259 2.31676C11.1518 2.14265 10.9451 2.00454 10.7176 1.91031C10.4901 1.81608 10.2463 1.76758 10.0001 1.76758C9.75384 1.76758 9.51002 1.81608 9.28253 1.91031C9.05504 2.00454 8.84834 2.14265 8.67423 2.31676L1.43257 9.55843C1.31877 9.67636 1.25585 9.83426 1.25735 9.99814C1.25885 10.162 1.32466 10.3187 1.44059 10.4346C1.55653 10.5504 1.71332 10.616 1.87719 10.6174C2.04106 10.6187 2.19891 10.5557 2.31673 10.4418L9.5584 3.20009Z"
        fill="black"
      />
      <path
        d="M10 4.52657L16.7992 11.3257C16.8242 11.3507 16.8492 11.3741 16.875 11.3974V16.5624C16.875 17.4249 16.175 18.1249 15.3125 18.1249H12.5C12.3342 18.1249 12.1753 18.0591 12.0581 17.9418C11.9408 17.8246 11.875 17.6657 11.875 17.4999V13.7499C11.875 13.5841 11.8092 13.4252 11.6919 13.308C11.5747 13.1908 11.4158 13.1249 11.25 13.1249H8.75C8.58424 13.1249 8.42527 13.1908 8.30806 13.308C8.19085 13.4252 8.125 13.5841 8.125 13.7499V17.4999C8.125 17.6657 8.05915 17.8246 7.94194 17.9418C7.82473 18.0591 7.66576 18.1249 7.5 18.1249H4.6875C4.2731 18.1249 3.87567 17.9603 3.58265 17.6673C3.28962 17.3742 3.125 16.9768 3.125 16.5624V11.3974C3.15093 11.3742 3.17621 11.3503 3.20083 11.3257L10 4.5249V4.52657Z"
        fill="black"
      />
    </svg>
  );
}