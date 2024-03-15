import { Lens } from "@/actions/Lens";
import Header from "@/components/lens/Header";
import LensResults from "@/components/lens/LensResults";

const LensPage = async ({ searchParams }: { searchParams: { q?: string } }) => {
  // console.log(searchParams.q);
  const Results = await Lens(searchParams.q);
  // console.log(Results.data);
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-[40%] dark:bg-[#303134] bg-[#e2e2e2] p-10 h-full fixed">
          <h2 className="flex justify-center items-center p-4 text-xl md:text-2xl font-bold">
            Google Lens
          </h2>
          <img
            src={searchParams.q}
            alt="post_image"
            className="rounded-lg flex items-center justify-center"
          />
        </div>
        <LensResults results={Results.data} />
      </div>
    </div>
  );
};

export default LensPage;
