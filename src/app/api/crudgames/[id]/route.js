import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma.js";

export async function GET (request, {params}) {
    const game = await prisma.game.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(game)
};

export async function PUT (request, {params}) {
    const data = await request.json()
    const gameUpdated = await prisma.game.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })

    return NextResponse.json(gameUpdated)
};

export async function DELETE (request, {params}) {
    try {
        const gameRemoved = await prisma.game.delete({
            where: {
                id: Number(params.id)
            }
        })
    
        return NextResponse.json(gameRemoved)
    } catch (error) {
        return NextResponse.json("Game not found")
    }
};