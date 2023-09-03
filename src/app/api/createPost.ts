import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { title, content } = req.body;
        const result = await prisma.post.create({
            data: {
                title,
                content,
                published: true,
            },
        });
        res.json(result);
    } else {
        res.status(405).end(); //Method Not Allowed
    }
}
