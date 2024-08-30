import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const dotenv = require("dotenv");

dotenv.config();

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3333;

// load prisma
const prisma = new PrismaClient();
prisma
  .$connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.error(e);
  });

// middleware
// cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// json parser
app.use(express.json());

// words group
app.get("/words", async (req, res) => {
  try {
    const kata = req.query.kata ? req.query.kata.toString() : "";
    // construct query
    const query = {
      kata: { contains: kata },
    };

    const words = await prisma.word.findMany({ where: query });
    res.status(200).send(words);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.post("/collections", async (req, res) => {
  try {
    const body = req.body;
    const word = await prisma.collection.create({
      data: {
        wordId: body.wordId,
        email: body.email,
      },
    });
    res.status(201).send(word);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.get("/collections", async (req, res) => {
  try {
    const email = req.query.email ? req.query.email.toString() : "";
    const collections = await prisma.collection.findMany({
      where: {
        email: email,
      },
    });
    res.status(200).send(collections);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
