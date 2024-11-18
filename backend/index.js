import express from 'express'
 
const app = express();
const PORT = 5000

import connectToMongoose from "./db.js"
import UserModel from "./UserMode.js"
import cors from "cors"


app.use(cors());

app.use(express.json());


connectToMongoose("mongodb+srv://developeraman123922:developerAman_*123922@cluster0.4l9e9.mongodb.net/Form_Data");

app.post("/", async (req, res)=>{
    const {name, email, password, number} = req.body
     const user = {name: name, email:  email, password: password, number: number}
     try {
         await UserModel.create(user);
         console.log("User created sucessfully...")
     } catch(err){
        console.log("Some error occurs while creating user...")
     }
     res.send(user)
})

app.get("/fetchUsers", async (req, res)=>{
    try { 
         const users = await UserModel.find({})
         res.send(users)
    } catch(err){
        console.log(`Some erro occurs while fetching users with: ${err}`)
    }
})



app.listen(PORT, ()=> {
    console.log(`App is listening on http://localhost:${PORT}`)
})