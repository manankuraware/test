import express from "express";
import Playerrouter from "./routes/players.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", Playerrouter);

app.listen(4000, 'localhost', () => {
    console.log("Server started on Port 4000")
})