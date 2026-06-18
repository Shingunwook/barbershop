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
        experience: Number(body.experience),
      },
    });
    return NextResponse.json(barber, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar barbeiro" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));
    await prisma.barber.delete({

      where: {
        id,
      },

    });
    return NextResponse.json({
      message: "Barbeiro eliminado",
    });
  }
   catch {
    return NextResponse.json(
      { error: "Erro ao eliminar" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {

  try {
    const body = await request.json();
    const barber = await prisma.barber.update({

      where: {
        id: body.id,
      },

      data: {
        name: body.name,
        experience: Number(body.experience),
      },

    });

    return NextResponse.json(barber);

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