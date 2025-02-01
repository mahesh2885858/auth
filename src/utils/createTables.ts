import client from "../db/client.js";
import { logger } from "./createLogger.js";
const d = logger("src/utils/createTables.ts");

export const createTables = async () => {
  try {
    // Query to create tables
    const query = `
  -- users table
CREATE TABLE IF NOT EXISTS users (
id INTEGER  GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL
);

-- posts table
CREATE TABLE IF NOT EXISTS posts (
id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
title TEXT NOT NULL,
user_id INTEGER NOT NULL,
content TEXT NOT NULL,
created_at TIMESTAMP DEFAULT NOW(),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)
`;

    if (!client) throw Error("Database instance was not provided");

    const results = await client.query(query);
    d("successfully created tables:", results);
  } catch (err: unknown) {
    d("Error while creating tables", err as Error);
  }
};
