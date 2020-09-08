import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';
import './initialize-db';
import { authenticationRoute } from './authenticate';
import path from 'path';
import {initializeDB} from './initialize-db'
import { assembleUserState } from './utility';
import uuid from 'uuid';

let port = process.env.PORT || 7777;
let app = express();

app.listen(port, console.log("Server listening on port", port));

app.get('/', (req, res) => {
     initializeDB();
     res.send("Server is running. Listening on port " + port);
 })


app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
);

authenticationRoute(app);

if (process.env.NODE_ENV == `production`) {
    app.use(express.static(path.resolve(__dirname, `../../dist`)));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    });
}

export const addNewTask = async (task) =>{
    let db = await connectDB();
    let collection = db.collection(`tasks`);
    await collection.insertOne(task);
}

export const addNewUser = async (user) =>{
    let db = await connectDB();
    let collection = db.collection(`users`);
    await collection.insertOne(user);
}

export const addManyGroups = async (groups) => {
    let db = await connectDB();
    let collection = db.collection(`groups`);
    for (let group in groups){
        await collection.insertOne(group);
    }
}

export const updateTask = async task => {
    let {id, group, isComplete, name} = task;
    let db = await connectDB();
    let collection = db.collection(`tasks`);

    if(group){
        await collection.updateOne({id}, {$set: {group}});
    }

    if(name){
        await collection.updateOne({id}, {$set: {name}});
    }

    if(isComplete !== undefined){
        await collection.updateOne({id}, {$set:{isComplete}})
    }

}

app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);

    res.status(200).send();
});

app.post('/task/update', async (req, res) => {
    let task = req.body.task;
    await updateTask(task);

    res.status(200).send();
});

app.post('/task/delete', async (req, res) => {

    let task = req.body.task;
    let taskID = task.taskID;

    let db = await connectDB();
    let collection = db.collection(`tasks`).deleteOne(task);

    res.status(200).send("Sending back task ID" + taskID)

    //await updateTask(task);

    //res.status(200).send();

});

app.post('/usersignup', async (req, res) => {

    let user = req.body.user;
    let db = await connectDB();
    let collection = db.collection(`users`);

    let username = user.name;
    let password = user.password;

    let userFound = await collection.findOne({name: username});
  
    //tester line
    //res.send("Username: " + username + " and password: " + password)
    
    if(userFound){
        res.status(500).send({message:"Username already exists! Please try another."});
        return;
    }

    let userID = uuid();

    let newUser = {
        id: userID,
        name:username,
        friends:[],
        passwordHash:password
    }

    await addNewUser(newUser);

    let standardGroups = [
        {
            name:"To Do",
            id: uuid(),
            owner: userID
        },{
            name:"Doing",
            id: uuid(),
            owner: userID
        },{
            name:"Done",
            id: uuid(),
            owner: userID
        }
    ]

    await db.collection(`groups`).insertMany(standardGroups);

    let state = await assembleUserState({id: userID, name: username});

    res.status(200).send({userID, state});

});