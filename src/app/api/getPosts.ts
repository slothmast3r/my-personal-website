import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const posts = await prisma.post.findMany({
            where: { published: true },
        });
        res.json(posts);
    } else {
        res.status(405).end(); //Method Not Allowed
    }
}
