"use client"
import { Country } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Dispatch, SetStateAction, useState } from "react"; 
import { Input } from "@/components/ui/input";

interface SearchFiltersProps {
  setCountries: Dispatch<SetStateAction<Country[] | undefined>>;
  countries: Country[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  setCountries,
  countries,
}) => {

  const [value, setValue] = useState("")



  let filtered: Country[] = countries;

  const onSearch = (value: string) => {
    if (value) {
      setValue("")
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase())
      );
      setCountries(filtered);
    } else {
      setCountries(filtered);
    }
  };
  const onSelect = (value: string) => {
    if (value) {
      document.querySelectorAll("input").forEach((e) => (e.value = ""));
      filtered = filtered.filter((c) => c.continent === value);
      setCountries(filtered);
    } else {
      setCountries(filtered);
    }
  };

  return (
    <div className="py-10 text-center text-neutral-200 flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-center justify-between gap-x-10 ">
      <Input
        id="search"
        placeholder="Search"
        type="text"
        name="search"
        onChange={(e) => onSearch(e.target.value)}
        className=" w-[400px] placeholder:text-neutral-200 border-none shadow-md bg-[#2B3945] shadow-slate-950 ring-transparent ring-offset-slate-500"
      />
      <Select onValueChange={(value) => {onSelect(value), setValue(value)}} value={value}>
        <SelectTrigger className="w-[180px] border-none shadow-md bg-[#2B3945] shadow-slate-950 ring-transparent ring-offset-slate-500">
          <SelectValue placeholder="Select a continent"/>
        </SelectTrigger>
        <SelectContent className="text-neutral-200 bg-[#2B3945]">
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

export default SearchFilters;
