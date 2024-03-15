import { Suspense } from "react";

import { DuckDuckSearch } from "@/actions/DuckDuckSearch";
import Loading from "@/components/Loading";
import News from "@/components/Options/News";

const NewsPage = async ({ searchParams }: { searchParams: { q?: string } }) => {
  const NewsSearch = await DuckDuckSearch("/news", searchParams.q);

  return (
    <div className="mt-4 ml-4 sm:max-w-lg lg:max-w-3xl lg:ml-52">
      <Suspense fallback={<Loading />}>
        <News results={NewsSearch.data} />
      </Suspense>
    </div>
  );
};

export default NewsPage;
