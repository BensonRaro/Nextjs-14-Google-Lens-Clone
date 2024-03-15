import { IoFlask } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Footer";
import Theme from "@/components/Theme/Theme";
export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="flex float-right gap-4 p-4 text-lg items-center mt-5 relative z-40">
        <p>Gmail</p>
        <p>Images</p>
        <Theme />
        <IoFlask className="h-6 w-6" />
        <TbGridDots className="h-6 w-6" />
      </header>
      {/* body */}
      <SearchForm />
      {/* footer */}
      <Footer />
    </main>
  );
}
