"use client";

import HTMLReactParser from "html-react-parser";
import Link from "next/link";

interface NewsProps {
  url: string;
  title: string;
  excerpt: string;
  relativeTime: string;
  image: string;
}

const News = ({ results }: { results: NewsProps[] }) => {
  return (
    <>
      {results.map((result) => (
        <div key={result.url}>
          <div className="flex justify-between gap-4 mb-8">
            <div className="flex flex-col dark:text-[#bdc1c6] text-[#202124]">
              <Link
                href={result.url}
                className="dark:text-blue-400 text-blue-700 hover:underline line-clamp-2"
              >
                {result.title}
              </Link>
              <p className="line-clamp-2 text-sm">
                {HTMLReactParser(result.excerpt)}
              </p>
              <p className="mt-2 text-sm">{result.relativeTime}</p>
            </div>
            <img src={result.image} alt="" className="h-24 w-24 rounded-md" />
          </div>
        </div>
      ))}
    </>
  );
};

export default News;
