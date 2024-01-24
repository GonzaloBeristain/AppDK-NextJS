import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma.js";

export async function GET() {
    try {
        const games = await prisma.game.findMany()
        return NextResponse.json(games)
    } catch (error) {
        return NextResponse.json(error)
    }
};

export async function POST(request) {
    try {
        const {name, image} = await request.json()
        const newGame = await prisma.game.create({
        data: {
            name,
            image
        }
    })
        return NextResponse.json(newGame)
    } catch (error) {
        return NextResponse.json(error)
    }
};