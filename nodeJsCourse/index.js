import express from 'express';
import users from './data/MOCK_DATA.json' with { type: 'json' };
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//hello world
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

//get users list
app.get('/users', (req, res) => {
    res.send(users);
});

//get user by id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const user = users.find((user) => {
        return user.id === id;
    });
    res.send(user);
});

//listener
app.listen(process.env.PORT, () => {
    console.log(`Server started in PORT ${process.env.PORT}`);
});
