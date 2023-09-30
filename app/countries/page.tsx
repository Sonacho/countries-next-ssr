"use client";
import SearchFilters from "@/app/countries/components/search-filters";
import getCountries from "@/actions/get-countries";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Country } from "@prisma/client";
import RevealOnScroll from "@/components/reveal-on-scroll";
import theGlobe from "@/public/theGlobe.png"
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true) 
  const [fileteredCountries, setFilteredCountries] = useState<
    Country[] | undefined
  >([]);

  const fetchCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
    setFilteredCountries(countries);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <header className="flex text-neutral-200 bg-[#2B3945] py-1 pt-4 shadow-slate-900 shadow-md min-w-screen justify-center">
        <Link href={"/countries"} className="font-bold text-4xl w-40 h-20">
          <Image src={theGlobe} alt="logo" className="p-0 m-0 rounded-lg shadow-md shadow-slate-900" />
        </Link>
      </header>
      <main className="mx-[8%] flex flex-col items-center">
        <SearchFilters
          setCountries={setFilteredCountries}
          countries={countries}
        />
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {fileteredCountries && !isLoading ?
            fileteredCountries.map((country) => (
              <RevealOnScroll>
                <Link
                  href={`/countries/${country.id}`}
                  key={country.id}
                  className="w-[270px] h-[340px] p-0 bg-[#2B3945] flex flex-col rounded-lg shadow-slate-900 shadow-md hover:shadow-lg hover:shadow-slate-950 transition-all transform hover:scale-105"
                >
                  <div className="h-1/2 w-full">
                    <img
                      src={country.img}
                      alt="img"
                      className="h-full w-full object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex-grow p-1">
                    <ul className="p-5 [&>li>span]:font-semibold [&>li]:text-sm text-neutral-300">
                      <li className="mb-2"><p className="font-bold text-xl">{country.name}</p></li>
                      <li><span>Population: </span>{country.population}.</li>
                      <li><span>Continent: </span>{country.continent}.</li>
                      <li><span>Capital: </span>{country.capital}.</li>
                    </ul>
                  </div>
                </Link>
              </RevealOnScroll>
            )):
            <div className="flex flex-wrap gap-12 items-center justify-center">
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" />
              <Skeleton className="w-[270px] h-[340px] rounded-lg bg-[#2B3945]" /> 
            </div>
            }
            {fileteredCountries?.length === 0 && <p className="font-semibold text-lg text-neutral-200">Not countries found.</p>}
        </div>
      </main>
    </>
  );
};

export default Countries;
