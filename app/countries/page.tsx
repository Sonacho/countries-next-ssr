
import Search from "@/app/countries/components/search";
import getCountries from "@/actions/get-countries";
import Link from "next/link";
import React from "react";
import theGlobe from "@/public/theGlobe.png";
import Image from "next/image";
import Filters from "./components/filters";

interface CountriesProps{
  searchParams: {
    continent: string,
    search:string
  }
} 

const Countries:React.FC<CountriesProps> = async ({searchParams}) => {
  const countries = await getCountries({continent:searchParams.continent, search:searchParams.search})
  return (
    <>
      <header className="flex text-neutral-200 bg-primary py-1 pt-4 shadow-slate-900 shadow-md min-w-screen justify-center">
        <Link href={"/countries"} className="font-bold text-4xl w-40 h-20">
          <Image
            src={theGlobe}
            alt="logo"
            className="p-0 m-0 rounded-lg shadow-md shadow-slate-900"
          />
        </Link>
      </header>
      <nav className="sm:flex-row sm:flex sm:items-center sm:justify-center flex flex-col items-center justify-center py-10 gap-5">
        <Search/>
        <Filters/>
      </nav>
      <section className="mx-[8%] flex flex-col items-center">
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {countries && countries.map((country) => (
              <React.Fragment key={country.id}>
                  <Link
                    href={`/countries/${country.id}`}
                    className="w-[270px] h-[340px] p-0 bg-primary flex flex-col rounded-lg shadow-slate-900 shadow-md hover:shadow-lg hover:shadow-slate-950 transition-all transform hover:scale-105"
                  >
                    <div className="h-1/2 w-full">
                      <Image
                        src={country.img}
                        alt="img"
                        className="h-full w-full object-cover rounded-t-md"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex-grow p-1">
                      <ul className="p-5 [&>li>span]:font-semibold [&>li]:text-sm text-neutral-300">
                        <li className="mb-2">
                          <p className="font-bold text-xl">{country.name}</p>
                        </li>
                        <li>
                          <span>Population: </span>
                          {country.population}.
                        </li>
                        <li>
                          <span>Continent: </span>
                          {country.continent}.
                        </li>
                        <li>
                          <span>Capital: </span>
                          {country.capital}.
                        </li>
                      </ul>
                    </div>
                  </Link>
                  </React.Fragment>
            ))
          }
          {countries?.length === 0 && (
            <p className="font-semibold text-lg text-neutral-200">
              No countries found.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Countries;
