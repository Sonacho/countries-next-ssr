import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {

    const {searchParams} = new URL(req.url)
    const continent = searchParams.get("continent") || undefined
    const name = searchParams.get("search") || undefined
    const countriesDB = await prismadb.country.findMany({
      where:{
        continent,
        name:{
          contains:name,
          mode:"insensitive"
        }
    }});
    return NextResponse.json(countriesDB);
  } catch (error) {
    console.log("[COUNTRIES_GET]", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
}