import { NextRequest, NextResponse } from "next/server";
import { db } from '@/utils/db'
import { UserData } from "@/utils/schema";
import { eq } from "drizzle-orm";


export async function DELETE(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('q');
    if (!query) {
        return NextResponse.json({ "message": "Invalid query parameter" });
    }
    try {
        const res = await db.delete(UserData).where(eq(UserData.id, query));
        return NextResponse.json({ "message": "deleted" });
    } catch (error) {
        return NextResponse.json({ "message": "not deleted" });
    }
}