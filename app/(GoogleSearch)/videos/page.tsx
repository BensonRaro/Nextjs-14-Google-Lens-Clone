import { Suspense } from "react";

import { DuckDuckSearch } from "@/actions/DuckDuckSearch";
import Loading from "@/components/Loading";
import Videos from "@/components/Options/Videos";

const VideosPage = async ({
  searchParams,
}: {
  searchParams: { q?: string };
}) => {
  const NewsSearch = await DuckDuckSearch("/videos", searchParams.q);

  return (
    <div className="mt-4 ml-4 sm:max-w-lg lg:max-w-3xl lg:ml-52">
      <Suspense fallback={<Loading />}>
        <Videos results={NewsSearch.data} />
      </Suspense>
    </div>
  );
};

export default VideosPage;
