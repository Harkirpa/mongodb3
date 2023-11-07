const mongoose=require("mongoose")

const employeeSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    lastCompany:{
        type:String,
        required:true
    },
    lastSalary:{
        type:String,
        required:true
    },
    overallExp:{

        type:String,
        required:true
    },
    contactInfo:{
        type:String,
        required:true
    },
    yearGrad:{
        type:String,
        required:true
    },
    gradStream:{
        type:String,
        required:true
    }
})
const UserAccount=mongoose.model("UserAccount",employeeSchema)

module.exports=UserAccount