import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const words = await prisma.word.findMany({
        take: 5,
        select: {
          kata: true,
          makna: true,
          jenisKata: true
        }
      });
      res.status(200).json(words);
    } catch (error) {
      console.error('Error fetching words:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
