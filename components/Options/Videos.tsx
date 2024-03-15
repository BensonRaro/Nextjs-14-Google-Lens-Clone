"use client";

import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import Moment from "react-moment";
import ReactPlayer from "react-player";

interface VideosProps {
  url: string;
  title: string;
  description: string;
  publishedOn: string;
  published: string;
  publisher: string;
}

const Videos = ({ results }: { results: VideosProps[] }) => {
  return (
    <>
      {results.map((result) => (
        <div key={result.url} className="mb-8">
          <Link
            href={result.url}
            className="dark:text-blue-400 text-blue-700 hover:underline line-clamp-1"
          >
            {result.title}
          </Link>
          <div className="flex gap-4">
            <div className="h-[90px] w-[250px]">
              <ReactPlayer url={result.url} height={"90px"} width={"150px"} />
            </div>
            <div className="dark:text-[#bdc1c6] text-[#202124] text-sm space-y-2">
              <p className="line-clamp-2">
                {HTMLReactParser(result.description)}
              </p>
              <p className="flex gap-2">
                <span>{result.publishedOn}</span>
                <span className="text-[#9aa0a6]">{result.publisher}</span>
                <Moment fromNow>{result.published}</Moment>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Videos;
