import getCountry from "@/actions/get-country";
import CordsToMap from "@/components/cords-to-map";
import { ArrowLeftCircle } from "lucide-react";

import Link from "next/link";

const CountryDetail = async ({ params }: { params: { countryId: string } }) => {
  const country = await getCountry(params.countryId);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className=" bg-[#2B3945] w-11/12 h-5/6 rounded-lg flex flex-col">
        <div className="w-full h-[80%] flex justify-around p-10">
          <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={country.img}
            alt="flag"
            className="rounded-lg max-h-full"
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
        <div className="grow">
          <ul className="text-neutral-200 [&>li>p]:text-3xl [&>li>p]:font-semibold  [&>li>span]:text-neutral-300 [&>li]:flex [&>li]:flex-col [&>li]:items-center flex gap-x-5 flex-wrap justify-center">
            <li>
              <span>Name:</span>
              <p>{country.name}</p>
            </li>
            <li>
              <span>Capital:</span>
              <p>{country.capital}</p>
            </li>
            <li>
              <span>Continent:</span>
              <p>{country.continent}</p>
            </li>
            <li>
              <span>Subregion:</span>
              <p>{country.subregion}</p>
            </li>
            <li>
              <span>Popultaion:</span>
              <p>{country.population}</p>
            </li>
            <li>
              <span>Area:</span>
              <p>{country.area}m²</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
