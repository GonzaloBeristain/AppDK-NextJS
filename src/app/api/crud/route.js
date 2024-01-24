import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma.js";

export async function GET() {
    const cards = await prisma.card.findMany()
    return NextResponse.json(cards)
}

export async function POST(request) {
    const {name, image} = await request.json()
    const newCard = await prisma.card.create({
        data: {
            name,
            image
        }
    })
    return NextResponse.json(newCard)
};