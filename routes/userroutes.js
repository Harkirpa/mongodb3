const {register, data2, data3, data4, data5, data6, data7 } = require("../controller/userController");
const userRouter=require("express").Router();
userRouter.get("/register",register)
userRouter.post("/data2",data2)
userRouter.get("/data3",data3)
userRouter.get("/data4",data4)
userRouter.get("/data5",data5)
userRouter.get("/data6",data6)
userRouter.get("/data7",data7)

module.exports=userRouter;