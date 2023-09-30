import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { countryId: string } }
) {
  try {
    const countriesDB = await prismadb.country.findUnique({
      where: {
        id: params.countryId,
      },
    });

    return NextResponse.json(countriesDB);
  } catch (error) {
    console.log("[COUNTRY_GET]", error);
    return new NextResponse("Internal Error", { status: 400 });
  }
}
