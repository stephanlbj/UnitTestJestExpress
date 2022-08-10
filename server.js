import express from "express";

import {TestPass} from "./ValidatePass.js"



const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.post("/addUser/",(req, res)=>{

const {User , Password} = req.body


const Valid = TestPass(Password)

if(!Valid){
    res.status(400).json({message:"Please , provide a correct input"})
    return
}

res.status(200).json({message:"password valid."})



})



app.listen(PORT, ()=>console.log("Connected to server..."))