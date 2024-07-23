import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { email, name, password } = body;
		if (!email || !name || !password) {
			return new NextResponse("Missing info", { status: 400 });
		}

		const hashedPassword = await bcrypt.hash(password, 12);
		
		const user = await prisma.user.create({
			data: { email, name, hashedPassword },
		});
		console.log(user);

		return NextResponse.json(user);
	} catch (error: any) {
		console.error(error, "REGISTRATION_ERROR");
		return new NextResponse("Internal Error", { status: 500 });
	}
}
