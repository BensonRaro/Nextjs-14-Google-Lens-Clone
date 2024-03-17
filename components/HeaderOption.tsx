import { IconType } from "react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface HeaderOptionProps {
  Icon: IconType;
  text: string;
}
const HeaderOption = ({ Icon, text }: HeaderOptionProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSelected = pathName === `/${text.toLocaleLowerCase()}`;
  const searchValue = searchParams.get("q");

  const Select = () => {
    if (
      text === "All" ||
      text === "Images" ||
      text === "News" ||
      text === "Videos"
    ) {
      router.push(`/${text.toLocaleLowerCase()}?q=${searchValue}`);
    }
  };
  return (
    <div
      className={` flex gap-2 pb-2 ${
        isSelected
          ? "border-b-8 border-blue-400 dark:text-blue-400 text-blue-700"
          : "cursor-pointer"
      }`}
      onClick={Select}
    >
      <Icon className="h-6 w-6" />
      <p className="mr-1">{text}</p>
    </div>
  );
};

export default HeaderOption;
