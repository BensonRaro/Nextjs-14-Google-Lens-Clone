import { Suspense } from "react";

import { DuckDuckSearch } from "@/actions/DuckDuckSearch";
import Loading from "@/components/Loading";
import All from "@/components/Options/All";

const AllPage = async ({ searchParams }: { searchParams: { q?: string } }) => {
  // console.log(searchParams.q);
  const WebSearch = await DuckDuckSearch("", searchParams.q);
  // console.log(WebSearch);
  return (
    <div className="mt-4 ml-4 sm:max-w-lg lg:max-w-3xl lg:ml-52">
      <Suspense fallback={<Loading />}>
        <All results={WebSearch.data} />
      </Suspense>
    </div>
  );
};

export default AllPage;
