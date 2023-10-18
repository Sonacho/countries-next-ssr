"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
 

  const [search, setSearch] = useState("");
  

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "search",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["search"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);


  return (
    <div className="text-center text-neutral-200">
      <Input
        id="search"
        placeholder="Search"
        type="text"
        name="search"
        autoComplete="false"
        onChange={(e) => {setSearch(e.target.value), window.localStorage.setItem("searchValue", search)}}
        value={search}
        className=" w-[400px] placeholder:text-neutral-200 border-none shadow-md bg-primary shadow-slate-950 !ring-0 ring-offset-slate-500"
      />
    </div>
  );
};

export default Search;
