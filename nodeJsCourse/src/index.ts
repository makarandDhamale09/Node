import express from 'express'
import usersData from './data/MOCK_DATA.json'
import {User} from "./model";


const app = express()

const users: User[] = usersData.map((user: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        job_title: string;
    }) =>
        new User(user.id, user.first_name, user.last_name, user.email, user.gender, user.job_title)
)


app.get("/", (req, res) => {
    res.send("Hello World")
})


app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/users/:id", (req, res) => {
    const id: number = parseInt(req.params.id)
    const user: User | undefined = users.find((user) => user.getId === id);
    if (!user) {
        throw new Error("User not found!!")
    }
    res.send(user)
})

app.listen(process.env.PORT, () => {
    console.log("Server Started!!")
})