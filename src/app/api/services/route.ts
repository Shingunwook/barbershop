import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await prisma.service.findMany();

    return NextResponse.json(services);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const service = await prisma.service.create({
      data: {
        name: body.name,
        price: body.price,
        duration: body.duration,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create service" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));

    if (!id) {
        return Response.json(
            {
                error: "ID is required",
            },
            {
                status: 400,
            }
        );
    }

    await prisma.service.delete({
        where: {
            id: Number(id),
        },
    });

    return Response.json({
        success: true,
    });
}