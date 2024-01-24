import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma.js";

export async function GET (request, {params}) {
    const card = await prisma.card.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(card)
};

export async function PUT (request, {params}) {
    const data = await request.json()
    const cardUpdated = await prisma.card.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })

    return NextResponse.json(cardUpdated)
};

export async function DELETE (request, {params}) {
    try {
        const cardRemoved = await prisma.card.delete({
            where: {
                id: Number(params.id)
            }
        })
    
        return NextResponse.json(cardRemoved)
    } catch (error) {
        return NextResponse.json("Card not found")
    }
};