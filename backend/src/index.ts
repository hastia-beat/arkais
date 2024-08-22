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
  next();
});

// words group
app.get("/words", async (req, res) => {
  try {
    const search = req.query.search;

    // construct query
    const query = {
      kata: { contains: search ? search.toString() : "" },
    };

    const words = await prisma.word.findMany({ where: query });
    res.status(200).send(words);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
