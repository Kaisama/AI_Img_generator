import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'
import connectDb from './mongodb/connect.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));



app.get('/',async(req,res)=>{
    res.send('Express Running ')
})

connectDb();

const startServer=()=>{
    app.listen(8080,()=>
        console.log('Server is Running'))
}

startServer();