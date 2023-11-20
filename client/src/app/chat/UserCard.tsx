type props = {
  username: string;
  email: string;
  status: string;
  bio: string;
  selectedConvo: string | undefined;
  setSelectedConvo: (newState: string) => void;
  rand:number
};
export default function UserCard({
  username,
  email,
  status,
  bio,
  selectedConvo,
  setSelectedConvo,
  rand
}: props) {
  return (
    <div
      onClick={() => setSelectedConvo(email)}
      className={`flex justify-between gap-2 cursor-pointer py-2 px-2 rounded-md w-full ${
        selectedConvo == email && "bg-gray-200"
      }`}
    >
      <div className=" flex">
        <div className="h-10 w-10 rounded-full bg-green-200" />
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex justify-between w-full">
          <h3 className="text-sm font-medium">{username || "John Doe"}</h3>
          <li className="text-xs text-[#7C8081]">{rand} mins ago</li>
        </div>
        {/* <p className="text-xs text-[#7C8081]">{status}</p>
        <p className="text-xs  mt-1 truncate w-52 ">
          {bio}
        </p> */}
      </div>
    </div>
  );
}
