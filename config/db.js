const cloud="mongodb+srv://Harkirpa:Harkirpa@cluster0.6fxqaqx.mongodb.net/humanresource?retryWrites=true&w=majority";
const mongoose=require("mongoose")
mongoose.set("strictQuery",true)

const connection=async()=>{
    try{
        await mongoose.connect(cloud)
    }
    catch(err){
        console.log(err,"occured during connection with DB")
    }
}
module.exports=connection