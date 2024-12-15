import express from 'express';
import {User} from "./model.js";
import dotenv from "dotenv";
import * as fs from "node:fs";
import * as path from "node:path";

dotenv.config()
const app = express()

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const jsonFilePath = path.resolve(__dirname, '../data/MOCK_DATA.json');

const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
const usersData = JSON.parse(jsonData)

const users: User[] = usersData.map((userData: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    job_title: string;
}) => new User(userData.id, userData.first_name, userData.last_name, userData.email, userData.gender, userData.job_title));


//Hello World API
app.get("/", (req, res) => {
    res.send("Hello World")
})

//Get list of users
app.get("/users", (req, res) => {
    res.send(users)
})

//Get users by id
app.get("/users/:id", (req, res) => {
    const id: number = parseInt(req.params.id)
    const user: User | undefined = users.find((user: User) => user.id === id);
    if (!user) {
        throw new Error("User not found!!")
    }
    res.send(user)
})

//Listener configuration
app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`)
})