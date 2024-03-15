import { Suspense } from "react";

import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-6">
      <Suspense>
        <Header />
        <SubHeader />
      </Suspense>
      {children}
    </div>
  );
};

export default SearchLayout;
