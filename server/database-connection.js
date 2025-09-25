import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const databaseConnectionString = process.env.DB_URL;

export const db = new pg.Pool({
    connectionString: databaseConnectionString,
});