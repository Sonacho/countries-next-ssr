import prismadb from "../lib/prismadb"
import axios from "axios";

async function main() {
    const countries = await axios
    .get("https://restcountries.com/v3/all")
    .then((response) => response.data);
  for (let i = 0; i < countries.length; i++) {
    await prismadb.country.create({
      data: {
        id: countries[i].cca3.toLowerCase(),
        name: countries[i].name.common,
        img: `${
          countries[i].flags[0]
            ? countries[i].flags[0]
            : countries[i].flags[1]
        }`,
        continent: `${
          countries[i].continents.length === 1
            ? countries[i].continents[0]
            : `${
                countries[i].continents[0] + "," + countries[i].continents[1]
              }`
        }`,
        capital: `${
          !countries[i].capital
            ? "Capital not found"
            : `${countries[i].capital.map((c: string) => c.toString())}`
        }`,
        subregion: `${
          !countries[i].subregion
            ? "Subregion not found"
            : countries[i].subregion
        }`,
        area: countries[i].area,
        population: countries[i].population,
        cords: countries[i].latlng,
      },
    });
  }
  
}
main()
  .then(async () => {
    await prismadb.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismadb.$disconnect()
    process.exit(1)
})