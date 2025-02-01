import pg from "pg";
import { logger } from "../utils/createLogger.js";

const d = logger("src/db/client.ts");

const client = new pg.Client();

export const connectToDb = async () => {
  try {
    await client.connect();
    d("Connected to the database successfully.");
  } catch (error) {
    d("Failed to connect to the database:", error);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default client;
