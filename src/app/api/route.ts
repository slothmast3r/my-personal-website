import { NextResponse } from 'next/server'


const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()


export async function GET(request: Request) {

    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })  
    return NextResponse.json
    (usersWithPosts)
}