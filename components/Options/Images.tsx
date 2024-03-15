"use client";

import Masonary from "react-masonry-css";
import Link from "next/link";

interface ImagesProps {
  url: string;
  title: string;
  image: string;
}
const Images = ({ results }: { results: ImagesProps[] }) => {
  const breakpointColumns = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <Masonary className="flex mx-4 gap-4" breakpointCols={breakpointColumns}>
      {results.map((result) => (
        <Link href={result.url} key={result.url} className="w-auto gap-4">
          <img
            src={result.image}
            alt="post_image"
            className="rounded-lg w-full"
          />
          <p className="line-clamp-1 mt-1 mb-4">{result.title}</p>
        </Link>
      ))}
    </Masonary>
  );
};

export default Images;
