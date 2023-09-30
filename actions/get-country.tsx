import { Country } from "@prisma/client";
import axios from "axios";

export default async function getCountry(id: string): Promise<Country> {
    const countries = await axios.get(`/api/countries/${id}`) ;
    return countries.data;
}
