import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        customer: true,
        barber: true,
        service: true,
      },
    });

    return NextResponse.json(reservations);
  }  catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Failed to fetch reservations",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    let customer = await prisma.customer.findUnique({

      where: {

        email: body.email,

      },

    });

    if (!customer) {

  customer = await prisma.customer.create({

    data: {

      name: body.name,

      email: body.email,

      phone: body.phone,

    },

  });

}

    const existingReservation =
      await prisma.reservation.findFirst({
        where: {
          barberId: Number(body.barberId),
          date: new Date(body.date)
        }
      });

    if (existingReservation) {
      return NextResponse.json(
        { error: "Time slot already booked" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        date: new Date(body.date),
        barberId: Number(body.barberId),
        serviceId: Number(body.serviceId),
        customerId: customer.id,
      },
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
