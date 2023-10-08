import { Country } from "@prisma/client";
import axios from "axios";
import qs from 'query-string';

const URL = `${process.env.LOCALHOST}/api/countries`
interface Query {
    continent?: string,
    search?: string
  }

export default async function getCountries(query: Query): Promise<Country[]> {

    const url = qs.stringifyUrl({
        url: URL,
        query:{
          continent: query.continent,
          search: query.search
        }
      });

    const countries = await axios.get(url);
    return countries.data;
}
 