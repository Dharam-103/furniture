const express=require("express");
const cartRouter=express.Router();

cartRouter.get("/getcart",async(req,res)=>{
   
})

cartRouter.post("/addtocart",async(req,res)=>{
   
    
})

cartRouter.patch("/updatecart/:id",(req,res)=>{

})


cartRouter.delete("/deletecart/:id",(req,res)=>{

})

module.exports={
    cartRouter
}