import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany();

    return NextResponse.json(reservations);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch reservations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const reservation = await prisma.reservation.create({
      data: {
        date: new Date(body.date),
        barberId: body.barberId,
        customerId: body.customerId,
        serviceId: body.serviceId,
      },
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create reservation" },
      { status: 500 }
    );
  }
}