import cn from "@/lib/utils";

export default function Card({
  title,
  content,
  action,
  className,
}: {
  title: string;
  content: string;
  action: string;
  className: string;
}) {
  return (
    <div className={cn(`first:md:w-64 last:lastCard md:w-56 w-72 h-40 rounded-lg shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-[#f5f5f5] flex flex-col justify-center`, className)}>
      <h1 className="ml-6 mb-6 font-medium text-black">{title}</h1>
      <p className="ml-6 m-1 text-[#4B5563]">{content}</p>
      <span className="ml-6 m-1">{action}</span>
    </div>
  );
}
