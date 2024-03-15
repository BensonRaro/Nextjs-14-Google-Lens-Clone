"use client";

import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import ReactPlayer from "react-player";

interface AllProps {
  title: string;
  description: string;
  hostname: string;
  url: string;
  icon: string;
}

const All = ({ results }: { results: AllProps[] }) => {
  return (
    <>
      {results.map((result) => {
        const isVideo = result.url.includes("www.youtube.com/watch");
        return (
          <div className="flex flex-col mb-8" key={result.url}>
            <div className="flex items-center gap-2 line-clamp-1">
              <img
                src={result.icon}
                alt="icon"
                className="object-contain w-8 h-8 rounded-full"
              />
              <div>
                <p>{result.hostname}</p>
                <p className="text-xs">{result.url}</p>
              </div>
            </div>
            <Link
              href={result.url}
              className="text-blue-700 dark:text-blue-400 hover:underline line-clamp-1"
            >
              {result.title}
            </Link>
            {isVideo && (
              <div className="flex gap-4">
                <ReactPlayer url={result.url} height={"90px"} width={"350px"} />
                <p>{HTMLReactParser(result.description)}</p>
              </div>
            )}
            <p
              className={
                isVideo
                  ? "hidden"
                  : "line-clamp-2 dark:text-[#bdc1c6] text-[#202124]"
              }
            >
              {HTMLReactParser(result.description)}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default All;
