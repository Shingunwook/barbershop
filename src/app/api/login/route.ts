import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {
        const body = await request.json();
        const admin = await prisma.admin.findUnique({

            where: {
                email: body.email,
            },

        });

        if (!admin) {
            return NextResponse.json(
                { error: "Admin not found" },
                { status: 404 }
            );

        }

        if (admin.password !== body.password) {
            return NextResponse.json(
                { error: "Wrong password" },
                { status: 401 }
            );
        }

        return NextResponse.json({
            success: true,
        });

    }

    catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error: "Internal Server Error",
            },
            {
                status: 500,

            }
        );
    }
}