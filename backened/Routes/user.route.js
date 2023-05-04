const express=require("express");
const { UserModel } = require("../Models/user.model");
const userRouter=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

userRouter.post("/register",async(req,res)=>{
     const{name,email,password}=req.body;

     try{
        const user= await UserModel.findOne({email});
        if(user){
            res.send("User is already exists");
        }else{
            bcrypt.hash(password,5,async(err, hash)=> {
                  if(err){
                       res.send({"err":err.message})
                  }else{
                      const users=new UserModel({name,email,password:hash});
                      await users.save();
                      res.send("Users registered successfully !!");
                  }
            });
        }

     }catch(err){
        res.send({"msg":err.message});
     }
})

userRouter.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user= await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,(err, result)=> {
                 if(result){
                    res.send({"msg":"Login Successfull !!","token":jwt.sign({"userID":user._id}, process.env.secretKey)});
                 }else{
                    res.send("Wrong Credentials !!");
                 }
            });
        }else{
            res.send("Please Register First !!");
        }
    }catch(err){
        res.send({"msg":err.message});
    }

})


module.exports={
    userRouter
}