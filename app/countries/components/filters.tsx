"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
const Filters = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSelect = (value: string) => {
    let newUrl = "";
    if (value) {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "continent",
        value: value,
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["continent"],
      });
    }
    router.push(newUrl);
  };

  return (
    <div>
      <Select
        onValueChange={(value) => {
          onSelect(value), setValue(value);
        }}
      >
        <SelectTrigger className="w-[180px] border-none shadow-md bg-primary shadow-slate-950 !ring-0 ring-offset-slate-500 text-neutral-200">
          <SelectValue placeholder="Select a continent" />
        </SelectTrigger>
        <SelectContent className="text-neutral-200 bg-primary  border-slate-500 border-2">
          <SelectGroup className="[&>*:hover]:bg-slate-600 [&>*:hover]:cursor-pointer">
            <SelectItem value="">All</SelectItem>
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="North America">North America</SelectItem>
            <SelectItem value="Antarctica">Antarctica</SelectItem>
            <SelectItem value="South America">South America</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
