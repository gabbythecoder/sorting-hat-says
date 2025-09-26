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

//read data from my users table 
app.get("/users/:username", async (request, response) => {
    try {
        const username = request.params.username;
        const data = await db.query(`SELECT id, user_name FROM users WHERE user_name = $1;`, [username]);
        response.json(data.rows);
        //testing 
        // console.log(username);
        // console.log(data);
    } catch (error) {
        console.error("Error in GET /users:", error);
        response.status(500).json({ success: false });
    }
})

//read data from my quiz_result and user table using JOIN 
app.get("/quiz-result", async (request, response) => {
    try {
        const data = await db.query(`SELECT quiz_result.sorting_house, users.id, users.user_name FROM users JOIN quiz_result ON users.id = quiz_result.user_id;`);
        response.json(data.rows);
    } catch (error) {
        console.error("Error in GET /quiz-result:", error);
        response.status(500).json({ success: false });
    };
});

//create new data in the users table
app.post("/add-user", (request, response) => {
    try {
        const userData = request.body;
        const query = db.query(`INSERT INTO users (user_name) VALUES ($1);`, 
            [userData.user_name]
        );
        response.status(200).json({ success: true }); 
    } catch (error) {
        console.error("Error in POST /add-user:", error);
        response.status(500).json({ success: false });
    };
});

//create new data in the quiz-result table
app.post("/add-quiz-result", (request, response) => {
    try {
        const quizResultData = request.body;
        const query = db.query(`INSERT INTO quiz_result (sorting_house, user_id) VALUES ($1, $2);`, 
            [
                quizResultData.sorting_house,
                quizResultData.user_id
            ]
        );
        response.status(200).json({ success: true });
    } catch (error) {
        console.error("Error in POST /add-quiz-result:", error);
        response.status(500).json({ success: false });
    };
});

//? Stretch - want a route to DELETE data
//? Stretch - want a route to UPDATE data