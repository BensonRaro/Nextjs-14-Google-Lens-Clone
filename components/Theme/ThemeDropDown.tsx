import { useTheme } from "next-themes";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeDropDown = () => {
  const { setTheme } = useTheme();

  return (
    <div className="relative">
      <div className="absolute dark:bg-[#202124] bg-[#FFFFFF] shadow-xl mt-5 space-y-3">
        <p className="flex gap-2" onClick={() => setTheme("dark")}>
          <MdDarkMode className="h-6 w-6" /> Dark
        </p>
        <p className="flex gap-2" onClick={() => setTheme("light")}>
          <MdLightMode className="h-6 w-6" /> Light
        </p>
        <p className="flex gap-2" onClick={() => setTheme("system")}>
          <HiComputerDesktop className="h-6 w-6" /> System
        </p>
      </div>
    </div>
  );
};

export default ThemeDropDown;
