import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const barbers = await prisma.barber.findMany();

    return NextResponse.json(barbers);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch barbers" },
      { status: 500 }
    );
  }
}