import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const countriesDB = await prismadb.country.findMany();
    return NextResponse.json(countriesDB);
  } catch (error) {
    console.log("[COUNTRIES_GET]", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
}