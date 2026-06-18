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

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    await prisma.reservation.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      message: "Reservation deleted",
    });

  } catch (error) {

    console.error(error);
    return NextResponse.json(

      {
        error: "Erro ao eliminar",
      },

      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const reservation = await prisma.reservation.update({

      where: {
        id: Number(body.id),
      },

      data: {
        status: body.status,
      },
    });

    return NextResponse.json(reservation);

  } catch (error) {
    console.error(error);
    return NextResponse.json(

      {
        error: "Erro ao atualizar",
      },

      {
        status: 500,
      }
    );
  }
}