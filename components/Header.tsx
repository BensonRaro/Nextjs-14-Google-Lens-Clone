"use client";

import { useState } from "react";
import { IoFlask } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { FcSearch } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { BiSolidMicrophone } from "react-icons/bi";
import { BsCameraFill } from "react-icons/bs";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import qs from "query-string";
import Link from "next/link";

import Theme from "@/components/Theme/Theme";
import FileUpload from "@/components/lens/FileUpload";
const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("q");
  // console.log(searchValue);

  const [searchQuery, setSearchQuery] = useState(
    searchValue ? searchValue : ""
  );
  const [showUploadModal, setShowUploadModal] = useState(false);
  // submit fn
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // console.log(searchQuery);
    if (!searchQuery) return;

    const url = qs.stringifyUrl(
      {
        url: pathName,
        query: { q: searchQuery },
      },
      { skipEmptyString: true }
    );
    router.push(url);
    router.refresh();
    // router.push(`/all?query=${searchQuery}`);
  };

  return (
    <header className="flex justify-between items-center gap-4 mt-10 sticky top-0 z-40 dark:bg-[#202124] bg-[#FFFFFF] py-2">
      <div className="flex items-center w-full gap-5 ml-2 lg:ml-10 md:ml-4">
        <Link href={"/"} className="items-center text-3xl md:text-4xl">
          Google
        </Link>
        {/* fileUploader modal => lens */}
        {showUploadModal && (
          <div className="relative shadow-2xl">
            <div className="absolute -mt-7 sm:w-[512px] lg:w-[800px]">
              <FileUpload setModal={setShowUploadModal} />
            </div>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="flex dark:bg-[#303134] bg-[#FFFFFF] focus-within:shadow-lg rounded-full px-5 py-3 items-center w-full max-w-md sm:max-w-xl lg:max-w-2xl"
        >
          {/* fileupload => lens */}

          <CiSearch className="h-6 w-6" />
          <input
            type="search"
            className="bg-transparent focus:outline-none mx-2 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FcSearch className="h-6 w-6" />
          </button>
          <BiSolidMicrophone className="h-6 w-6" />
          <BsCameraFill
            className="h-6 w-6 ml-1 cursor-pointer"
            onClick={() => setShowUploadModal(true)}
          />
        </form>
      </div>
      <Theme />
      <IoFlask className="h-6 w-6" />
      <TbGridDots className="h-6 w-6" />
      <img src="/logo.png" alt="logo" className="mr-4 rounded-full h-7 w-7" />
    </header>
  );
};

export default Header;
