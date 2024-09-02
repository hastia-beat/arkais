import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3333;

const prisma = new PrismaClient();

// Connect to the database
prisma.$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.error("Failed to connect to the database:", e);
    process.exit(1); // Exit if unable to connect to the database
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

    if (!wordId || !email) {
      return res.status(400).json({ error: "wordId and email are required" });
    }

    const collection = await prisma.collection.create({
      data: {
        wordId,
        email,
      },
    });
    res.status(201).json(collection);
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
        word: true, // Include related word data
      },
    });

    console.log('Collections fetched:', collections);

    res.status(200).json(collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/collections/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Collection ID is required" });
    }

    // Check if the collection exists before attempting to delete
    const existingCollection = await prisma.collection.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingCollection) {
      return res.status(404).json({ error: "Collection not found" });
    }

    await prisma.collection.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Collection deleted successfully" });
  } catch (error) {
    console.error("Error deleting collection:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
