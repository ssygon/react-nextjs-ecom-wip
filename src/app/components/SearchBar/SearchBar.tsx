"use client";

import IconSearch from "@/app/icons/search.svg";
import { useRouter } from "next/navigation";


const SearchBar = () => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchInput = formData.get("search") as string;
    console.log(searchInput);

    if (searchInput) {
      router.push(`/list?search=${searchInput}`);
    }
  };

  return (
    <>
      <form className="flex items-center gap-2 bg-gray-100 rounded-md flex-1 max-w-[220px] py-2 px-3" onSubmit={handleSearch}>
        <input name="search" type="text" placeholder="Search" className="w-full flex-1 bg-transparent outline-none" />
        <button className="cursor-pointer">
          <IconSearch width={20} height={20} viewBox={"0 0 56 56"}/>
        </button>
      </form>
    </>
  );
};

export default SearchBar;