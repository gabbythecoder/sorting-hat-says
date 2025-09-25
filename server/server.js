import express from "express";
import cors from "cors";
import { db } from "./database-connection.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.get("/", (request, response) => {
    response.json({ message: "Welcome to the server. GET comfy!" });
});

// todo - want a route to READ data

// todo - want a route to CREATE data

//? Stretch - want a route to DELETE data
//? Stretch - want a route to UPDATE data