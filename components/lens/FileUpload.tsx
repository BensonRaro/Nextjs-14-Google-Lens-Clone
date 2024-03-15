"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LiaTimesSolid } from "react-icons/lia";
import qs from "query-string";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  setModal: (mdoal: boolean) => void;
}

const FileUpload = ({ setModal }: FileUploadProps) => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const HandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;

    const SearchUrl = qs.stringifyUrl(
      {
        url: "/lens",
        query: { q: url },
      },
      { skipEmptyString: true }
    );

    router.push(SearchUrl);
  };

  return (
    <div className="dark:bg-[#303134] bg-[#FFFFFF] shadow-xl rounded-3xl px-4 pb-6">
      <div className="flex justify-between p-4">
        <p className="lg:ml-[30%] ml-[20%]">
          Search any image with Google Lens
        </p>
        <LiaTimesSolid
          className="h-6 w-6 cursor-pointer"
          onClick={() => setModal(false)}
        />
      </div>
      <form
        onSubmit={HandleSearch}
        className="dark:bg-[#202124] bg-[#F8F9FA] p-4 rounded-md border border-dashed dark:border-[#4b4c50]"
      >
        <UploadDropzone
          endpoint={"messageFile"}
          onClientUploadComplete={(res) => {
            setUrl(res?.[0].url);
            router.push(`/lens?q=${res?.[0].url}`);
          }}
          onUploadError={(error: Error) => {
            console.log(error);
          }}
        />

        <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t dark:before:border-[#303134] after:mt-0.5 after:flex-1 after:border-t dark:after:border-[#303134]">
          <p className="mx-4 mb-0 text-center font-semibold text-white">OR</p>
        </div>
        <div className="flex justify-between">
          <div className="dark:bg-[#303134] border border-[#35373a] hover:border-blue-500 flex shadow-lg focus-within:shadow-lg max-w-md w-full rounded-full px-5 py-3 items-center sm:max-w-lg lg:max-w-xl ">
            <input
              type="search"
              id="url-search"
              className="bg-transparent focus:outline-none mx-2 w-full"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="paste image link"
            />
          </div>
          <button
            type="submit"
            className="dark:bg-[#303134] bg-transparent py-2 px-6 text-blue-500 border border-[#35373a] dark:hover:bg-transparent hover:bg-slate-300 rounded-full"
          >
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
