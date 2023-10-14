import { NextResponse } from 'next/server'

const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()


interface PostRequestBody {
    title: string;
    subtitle: string;
    content?: string;
    authorId: number;
}

export async function GET(request: Request) {

    const posts = await prisma.post.findMany()
    return NextResponse.json
    (posts)
}

export async function POST(request: Request){
    const requestBody = request.body as PostRequestBody;

    const post = await prisma.post.create({
        data: {
            title: requestBody.title,
            subtitle: requestBody.subtitle, // This is required based on your model.
            content: requestBody.content,   // This can be omitted if it's not provided.
            authorId: requestBody.authorId
        },
    });
    return NextResponse.json(post);
}




