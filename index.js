const express=require("express");
const userRouter = require("./routes/userroutes.js");
const PORT=4000
const app=express();
const cors = require('cors');
const connection = require("./config/db.js");
app.use(cors({
    origin: '*'
}));
app.use("/api",userRouter)
app.listen(PORT,async()=>{
    try{
        await connection();
        console.log('server is running on Port No. 4000')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})