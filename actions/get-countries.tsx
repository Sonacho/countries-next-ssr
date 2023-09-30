import { Country } from "@prisma/client";
import axios from "axios";

export default async function getCountries(): Promise<Country[]> {
    const countries =await axios.get(`/api/countries`) ;
    return countries.data;
}
