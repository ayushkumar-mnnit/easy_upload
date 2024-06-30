require('dotenv').config()
const express=require('express')
const connectDB = require('./db/connect')
const router = require('./routes/router')
const cors=require('cors')
const app=express()

const port=5500

const corsOptions={
    origin:'http://localhost:3000',           // handling cors policy
    methods:'POST,PATCH,GET,DELETE',
    Credentials:true
}

app.use(cors(corsOptions))

app.use(express.json()) // middlerware to parse json request into JS object

app.use(router)

connectDB().
then(()=>{
    app.listen(port,()=>{
        console.log(`server started at port ${port}`);
    })
}).catch((er)=>{
    console.log('connection failed !!');
})
