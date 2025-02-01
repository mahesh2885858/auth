import pg from "pg";
import { logger } from "../utils/createLogger.js";

const d = logger("src/db/ConnectToDb.ts");

export const connectToDb = async () => {
  try {
    const { Client } = pg;

    const client = new Client();

    await client.connect();

    client.on("error", (err) => {
      d("Error from db", err);
    });

    return client;
  } catch (error) {
    d("Error while connecting to db", error);
  }
};
