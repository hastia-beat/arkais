import express, { Express, Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

("use strict");

// header accepted
const ADDITIONAL_HEADERS = {
  X_USER_EMAIL: "x-user-email",
};

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3333;

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.error("Failed to connect to the database:", e);
    process.exit(1);
  });

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});

// Middleware
app.use(cors());
app.use(express.json());

app.get("/words", async (req: Request, res: Response) => {
  try {
    const kata = req.query.search ? req.query.search.toString() : "";
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

app.get("/words/random", async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit.toString()) : 5;
    const words =
      await prisma.$queryRaw`SELECT * FROM words ORDER BY RAND() LIMIT ${limit}`;
    res.status(200).json(words);
  } catch (error) {
    console.error("Error fetching words:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

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
    res.status(200).json(collections);
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/collections/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id ? parseInt(req.params.id) : 0;
    if (!id) {
      return res.status(400).json({ error: "id is required" });
    }

    // check email
    const email = req.headers[ADDITIONAL_HEADERS.X_USER_EMAIL]
      ? req.headers[ADDITIONAL_HEADERS.X_USER_EMAIL]?.toString()
      : "";
    if (!email) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    // hard delete
    await prisma.collection.delete({
      where: {
        id: id,
        email: email.toString(),
      },
    });
    res.status(204).json();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      error.code === "P2025";
      res.status(404).json({ error: "collection not found" });
      return;
    }
    console.error("Error deleting collection:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
