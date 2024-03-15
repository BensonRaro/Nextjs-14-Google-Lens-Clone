import { Suspense } from "react";

import { DuckDuckSearch } from "@/actions/DuckDuckSearch";
import Loading from "@/components/Loading";
import Images from "@/components/Options/Images";

const ImagesPage = async ({
  searchParams,
}: {
  searchParams: { q?: string };
}) => {
  const ImageSearch = await DuckDuckSearch("/images", searchParams.q);
  return (
    <Suspense fallback={<Loading />}>
      <Images results={ImageSearch.data} />
    </Suspense>
  );
};

export default ImagesPage;
