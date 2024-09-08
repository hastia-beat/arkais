// Mark this route as dynamic
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import CollectionUsecase from "@/app/usecases/collection";

export async function GET() {
    try {
        const session = await getServerSession(authOption);

        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const collectionUsecase = new CollectionUsecase();  
        const collections = await collectionUsecase.fetchCollection(session.user.email);

        return NextResponse.json({ user: session.user, collections }, { status: 200 });
    } catch (error) {
        console.error("Error fetching collections:", error.message);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
