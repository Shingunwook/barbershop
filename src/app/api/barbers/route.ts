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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const barber = await prisma.barber.create({
      data: {
        name: body.name,
        experience: body.experience,
      },
    });

    return NextResponse.json(barber, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create barber" },
      { status: 500 }
    );
  }
}