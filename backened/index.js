const express=require("express");
const { connection } = require("./db");
const app=express();
require("dotenv").config();
const cors=require("cors");
const { userRouter } = require("./Routes/user.route");
const { auth } = require("./Middleware/auth.middleware");
const { sofaRouter } = require("./Routes/sofa.route");
const { bedRouter } = require("./Routes/bed.route");
const { rackRouter } = require("./Routes/racks.route");
const { floorRouter } = require("./Routes/floor.route");
const { chairRouter } = require("./Routes/chair.route");
const { cartRouter } = require("./Routes/cart.route");

app.use(cors());
app.use(express.json());
app.use("/users",userRouter);
app.use(auth);
app.use("/sofas",sofaRouter);
app.use("/bed",bedRouter);
app.use("/rack",rackRouter)
app.use("/floor",floorRouter)
app.use("chair",chairRouter)
app.use("/cart",cartRouter);

app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log("Connected to database");
    }catch(err){
        console.log(err);
        console.log("Not able to connect database");
    }
    console.log(`Server is running on port ${process.env.PORT}`);
})