"use client";

import Link from "next/link";
import Masonry from "react-masonry-css";

interface LensResults {
  page_url: string;
  image_url: string;
  title: string;
}
const LensResults = ({ results }: { results: LensResults[] }) => {
  const breakpointColumns = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <Masonry
      className="flex mx-4 gap-4 w-[60%] ml-[41%]"
      breakpointCols={breakpointColumns}
    >
      {results.map((result) => (
        <Link
          href={result.page_url}
          key={result.page_url}
          className="w-auto gap-4"
        >
          <img
            src={result.image_url}
            alt="post_image"
            className="rounded-lg w-full"
          />
          <p className="line-clamp-1 mt-1 mb-4">{result.title}</p>
        </Link>
      ))}
    </Masonry>
  );
};

export default LensResults;
