import { LuLoader2 } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <LuLoader2 className="h-7 w-7 my-4 text-zinc-500 dark:text-zinc-400 animate-spin" />
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Fetching Results...
      </p>
    </div>
  );
};

export default Loading;
