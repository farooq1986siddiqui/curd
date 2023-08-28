import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data";

export async function GET(request:NextRequest) {
    return NextResponse.json({
        books,
    });
}

export async function POST(request:NextRequest) {
    const body = await request.json()
    const updatedBooks =  books.push(body);
    console.log("ye meri body ha:", body)
    return NextResponse.json({
        updatedBooks,
        message: "Book added successfuly"
    });
}