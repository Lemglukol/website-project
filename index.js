import express from "express";
import dotenv from  "dotenv"
//import Users from "./models/UserModel.js";
import db from './config/database.js';
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = 5000;

try{
    await db.authenticate();
    console.log('Database Connected...');
    //auto create table
    //await Users.sync();
} catch (err){
    console.error(err);
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router);

app.listen(port, ()=> 
    console.log('server running on port ' +port));


// https://www.youtube.com/watch?v=Ll_71n60vAM 48:08