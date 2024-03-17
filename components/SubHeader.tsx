"use client";

import { CiSearch } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { PiImageSquareFill } from "react-icons/pi";
import { RiVideoLine, RiBookMarkLine } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import HeaderOption from "./HeaderOption";

const SubHeader = () => {
  return (
    <div className="flex justify-between dark:text-[#bdc1c6] text-[#202124] lg:ml-52 ml-4 mt-4">
      <div className="flex gap-2 md:gap-4">
        {/* Header options */}
        <HeaderOption Icon={CiSearch} text="All" />
        <HeaderOption Icon={PiImageSquareFill} text="Images" />
        <HeaderOption Icon={FaRegNewspaper} text="News" />
        <HeaderOption Icon={RiVideoLine} text="Videos" />
        <HeaderOption Icon={RiBookMarkLine} text="Books" />
        <HeaderOption Icon={IoMdMore} text="More" />
      </div>
      <div className="gap-1">
        SafeSearch
        <IoMdArrowDropdown className="h-6 w-6" />
      </div>
    </div>
  );
};

export default SubHeader;
