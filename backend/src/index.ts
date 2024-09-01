import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3333;

// load prisma
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.error("Failed to connect to database:", e);
  });

// Handle Prisma disconnection when server stops
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to get words with optional query parameter
app.get("/words", async (req: Request, res: Response) => {
  try {
    const kata = req.query.kata ? req.query.kata.toString() : "";
    
    const words = await prisma.word.findMany({
      where: {
        kata: { contains: kata },
      },
    });
    res.status(200).json(words);
  } catch (error) {
    console.error("Error fetching words:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to create a collection
app.post("/collections", async (req: Request, res: Response) => {
  try {
    const { wordId, email } = req.body;

    // Ensure that both wordId and email are provided
    if (!wordId || !email) {
      return res.status(400).json({ error: "wordId and email are required" });
    }

    const word = await prisma.collection.create({
      data: {
        wordId,
        email,
      },
    });
    res.status(201).json(word);
  } catch (error) {
    console.error("Error creating collection:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to get collections with optional query parameter
app.get("/collections", async (req: Request, res: Response) => {
  try {
    const email = req.query.email ? req.query.email.toString() : "";
    const collections = await prisma.collection.findMany({
      where: {
        email: email,
      },
      include: {
        word: true, // Include data from the word table
      },
    });

    console.log('Collections fetched:', collections);

    res.status(200).json(collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
