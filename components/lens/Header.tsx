"use client";

import { useState } from "react";
import { RiUpload2Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import Link from "next/link";

import Theme from "@/components/Theme/Theme";
import FileUpload from "@/components/lens/FileUpload";
const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className="flex justify-between items-center sticky top-0 z-40 dark:bg-[#202124] bg-[#FFFFFF] py-2 shadow-md">
      <Link href={"/"} className="md:text-4xl text-3xl items-center ml-4">
        Google
      </Link>
      {modal && (
        <div className="shadow-2xl relative -ml-40">
          <div className="absolute mt-10 sm:w-[450px] lg:w-[800px]">
            <FileUpload setModal={setModal} />
          </div>
        </div>
      )}
      <div className="flex items-center gap-5">
        <button
          className="flex items-center text-lg font-semibold gap-4 p-4 dark:hover:bg-[#303134] hover:bg-slate-100 rounded-lg"
          onClick={() => setModal(true)}
        >
          <RiUpload2Line className="h-6 w-6" />
          Upload
        </button>
        <Theme />
        <TbGridDots className="h-7 w-7" />
        <img
          src="/favicon.ico"
          alt="logo"
          className="mr-4 rounded-full h-7 w-7"
        />
      </div>
    </header>
  );
};

export default Header;
