export default function ChatSmall() {
  return (
    <div className="flex items-center cursor-pointer py-2">
      <svg
        className="mr-2.5"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="19" cy="19" r="18.5" fill="#E4EFA5" stroke="#91C9C4" />
      </svg>
      <section>
        <section className="flex items-center">
          <h3 className="text-sm font-medium">John Doe</h3>
          <li className="mx-5 text-xs list-disc text-[#7C8081]">10 mins ago</li>
        </section>
        <h6 className="text-xs text-[#7C8081]">Important Work</h6>
        <p className="text-xs text-ellipsis whitespace-pre overflow-hidden mt-1 w-52">
          Track your income and expenses to understand where your money goes and comes from
        </p>
      </section>
    </div>
  );
}
