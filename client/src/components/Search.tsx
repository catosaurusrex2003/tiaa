export default function Search() {
  return (
    <div className="flex items-center w-60 h-9 mt-2 my-3.5 cursor-pointer bg-[#e9e9e9] rounded-xl">
      <svg
        className="m-2.5"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 13L9.53537 9.53537M9.53537 9.53537C10.4731 8.59765 10.9999 7.32583 10.9999 5.9997C10.9999 4.67357 10.4731 3.40175 9.53537 2.46403C8.59765 1.52632 7.32583 0.999512 5.9997 0.999512C4.67357 0.999512 3.40175 1.52632 2.46403 2.46403C1.52632 3.40175 0.999512 4.67357 0.999512 5.9997C0.999512 7.32583 1.52632 8.59765 2.46403 9.53537C3.40175 10.4731 4.67357 10.9999 5.9997 10.9999C7.32583 10.9999 8.59765 10.4731 9.53537 9.53537Z"
          stroke="#7C8081"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-sm font-medium text-[#7C8081]">Search...</p>
    </div>
  );
}
