type props = {
  username: string;
  email: string;
  selectedConvo: string | undefined;
  setSelectedConvo: (newState: string) => void;
};
export default function UserCard({
  username,
  email,
  selectedConvo,
  setSelectedConvo,
}: props) {
  return (
    <div
      onClick={() => setSelectedConvo(email)}
      className={`flex justify-between gap-2 cursor-pointer py-2 w-full ${
        selectedConvo == email && "bg-gray-200"
      }`}
    >
      <div className=" flex">
        <div className="h-10 w-10 rounded-full bg-green-200" />
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex justify-between w-full">
          <h3 className="text-sm font-medium">{username || "John Doe"}</h3>
          <li className="text-xs text-[#7C8081]">10 mins ago</li>
        </div>
        <p className="text-xs text-[#7C8081]">Important Work</p>
        <p className="text-xs  mt-1 truncate w-52 ">
          Track your income Track your income Track your income Track your
          income
        </p>
      </div>
    </div>
  );
}
