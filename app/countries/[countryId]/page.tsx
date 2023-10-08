import getCountry from "@/actions/get-country";
import CordsToMap from "@/components/cords-to-map";
import { ArrowLeftCircle, FrownIcon } from "lucide-react";

import Link from "next/link";

const CountryDetail = async ({ params }: { params: { countryId: string } }) => {
  const country = await getCountry(params.countryId);

  if (!country) {
    return (
      <div className="h-screen w-screen flex flex-col gap-y-3 items-center justify-center">
        <h1 className="text-3xl text-neutral-300 flex items-center">
          There is no country with the searched ID &nbsp;
          <span>
            <FrownIcon size={30} />
          </span>
        </h1>
        <Link
          href={"/countries"}
          className="rounded-md z-10 w-30 h-10 text-center flex items-center p-5 mt-3 bg-[#202C37] text-neutral-200 shadow-md shadow-slate-900"
        >
          <span className="flex">
            <ArrowLeftCircle />
            Back
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className=" bg-primary w-11/12 h-5/6 rounded-lg flex flex-col pb-2">
        <div className="w-full h-[70%] flex justify-around p-10">
          <div className="w-1/2 h-full flex items-center justify-center p-10 overflow-hidden">
            <img
              src={country.img}
              alt="flag"
              className="rounded-lg h-full object-cover"
            />
          </div>
          <div className="flex flex-col grow items-center justify-center">
            <div className=" w-[65%] h-[65%]">
              <CordsToMap
                area={country.area}
                cords={country.cords}
                name={country.id}
              />
            </div>
            <Link
              href={"/countries"}
              className="rounded-md z-10 w-30 h-10 text-center flex items-center p-5 mt-3 bg-[#202C37] text-neutral-200 shadow-md shadow-slate-900"
            >
              <span className="flex">
                <ArrowLeftCircle />
                Back
              </span>
            </Link>
          </div>
        </div>
        <div className="grow z-10">
          <div className={`text-neutral-200 flex flex-wrap justify-evenly [&>ul]:flex [&>ul]:flex-col [&>ul>li>p]:text-3xl [&>ul>li>p]:font-semibold [&>ul>li]:p-3
          [&>ul>li]:bg-[#202C37] [&>ul>li]:w-[300px] [&>ul>li]:h-auto [&>ul>li]:rounded-lg [&>ul>li]:mb-2 [&>ul>li]:shadow-md [&>ul>li]:shadow-slate-900
          `}>
            <ul>
              <li>
                <label>Name:</label>
                <p>{country.name}</p>
              </li>
              <li>
                <label>Capital:</label>
                <p>{country.capital}</p>
              </li>
            </ul>
            <ul>
              <li>
                <label>Continent:</label>
                <p>{country.continent}</p>
              </li>
              <li>
                <label>Subregion:</label>
                <p>{country.subregion}</p>
              </li>
            </ul>
            <ul>
              <li>
                <label>Area:</label>
                <p>{country.area}m²</p>
              </li>
              <li>
                <label>Population:</label>
                <p>{country.population}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
