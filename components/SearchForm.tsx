"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { BsCameraFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import qs from "query-string";

import FileUpload from "@/components/lens/FileUpload";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const router = useRouter();

  // submit fn
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // console.log(searchQuery);
    if (!searchQuery) return;

    const url = qs.stringifyUrl(
      {
        url: "/all",
        query: { q: searchQuery },
      },
      { skipEmptyString: true }
    );
    router.push(url);
    // router.push(`/all?query=${searchQuery}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="items-center justify-center h-screen flex flex-col absolute w-full z-30"
    >
      <h1 className="text-8xl items-center">Google</h1>
      <div className="flex mt-9 hover:shadow-lg dark:bg-[#303134] hover:bg-[#FFFFFF] focus-within:shadow-lg rounded-full border border-gray-200 dark:border-none px-5 py-3 items-center w-full max-w-md sm:max-w-xl lg:max-w-2xl">
        {/* fileupload => lens */}
        <div className={` ${showUploadModal ? "block shadow-2xl" : "hidden"} `}>
          <div className="absolute -ml-6 -mt-7 sm:w-[578px] lg:w-[800px]">
            <FileUpload setModal={setShowUploadModal} />
          </div>
        </div>
        <CiSearch className="h-6 w-6" />
        <input
          type="search"
          className="bg-transparent focus:outline-none mx-2 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <BiSolidMicrophone className="h-6 w-6" />
        <BsCameraFill
          className="h-6 w-6 cursor-pointer"
          onClick={() => setShowUploadModal(true)}
        />
      </div>
      <div className="mt-5 flex gap-4">
        <button
          type="submit"
          className="p-3 bg-[#DADCE0] dark:bg-[#303134] rounded-md cursor-pointer"
        >
          Google Search
        </button>
        <button className="p-3 bg-[#DADCE0] dark:bg-[#303134] rounded-md cursor-pointer">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
