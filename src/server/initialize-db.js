import { defaultState } from "./defaultState";
import {connectDB} from "./connect-db";
import {addNewUser} from "./server"

let user = {
    id:"U1",
    name:"IAPPEAR",
    friends:[`U3`],
    passwordHash:"12134"
}

let users = [{
    id:"U1",
    name:"TESTERTYS",
    friends:[`U2`],
    passwordHash:"1222234"
},{
    id:"U2",
    name:"TETRIS",
    friends:['U5'],
    passwordHash:123344
}]

let collectionNames = [ "users", "session"]

export async function initializeDB(){
    //let val = "hello";
    let db = await connectDB();

    //addNewUser(user);
    let user = await db.collection(`users`).findOne({id:"U1"});
    if(!user){

        for (let collectionName in defaultState){
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
}
initializeDB();
