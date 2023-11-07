const UserAccount = require("../model/usermodel");

const register=async(req,res)=>{
    const data=[
        {
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
    },
     {
        "firstName": "Rohan",
  "lastName": "Jame",
  "salary": "30000",
  "department": "Technical",
  "lastCompany": "Y",
  "lastSalary": "15000",
  "overallExp": "1",
  "contactInfo": "1234567860",
  "yearGrad": "2015",
  "gradStream": "CSE"
     },
     {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
     },
     {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
     },
     {
        "firstName": "Jame",
  "lastName": "roh",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
     },
   {
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
   },
   {
    "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
   },
   {
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
   },
   {
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
   },
   {
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
   },
  {
    "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "20000",
  "overallExp": "1",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "ECE"
  },{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
  },
  {
    "firstName": "Jame",
  "lastName": "Doe",
  "salary": "35000",
  "department": "Accounts",
  "lastCompany": "Z",
  "lastSalary": "15000",
  "overallExp": "2",
  "contactInfo": "123567890",
  "yearGrad": "2019",
  "gradStream": "EEE"
  }
]

const response=await UserAccount.create(data)
return res.send(response)
}
const data2=async(req,res)=>{
    const data =await UserAccount.find({}); 
    return res.send(data)
}
const data3=async(req,res)=>{
    const data =await UserAccount.find({"salary":{$gt:"30000"}}).toArray();
    return res.send(data)
}
const data4=async(req,res)=>{
    const data =await UserAccount.find({"overallExp":{$gt:"2"}}).toArray(); 
    return res.send(data)
}
const data5=async(req,res)=>{
    const data =await UserAccount.find({"salary":{$gt:"30000"}}).toArray();
    return res.send(data)
}
const data6=async(req,res)=>{
    const data =await UserAccount.updateMany({ "yearGrad": {$gt: "2015"}, "overallExp":{$gt: "1" }}); 
    return res.send(data)
}
const data7=async(req,res)=>{
    const data =await product.deleteMany({ "yearGrad": {$gt: "2015"}, "overallExp":{$gt: "1" }});
    return res.send(data)
}

module.exports={register,data2,data3,data4,data5,data6,data7}