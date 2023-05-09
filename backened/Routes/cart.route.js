const express=require("express");
const { CartModel } = require("../Models/cart.model");
const cartRouter=express.Router();

cartRouter.get("/getcart",async(req,res)=>{
    const userID=req.body.userID;
    try{
       const cart=await CartModel.find({"userID":userID});
       res.send(cart);
    }catch(err){
        res.send(err.message);
    }
})

cartRouter.post("/addtocart",async(req,res)=>{
    const {userID,image,name,price,productID,total,quantity}=req.body;
    try{
       let item=await CartModel.findOne({userID});
       if(item){
          item.quantity+=quantity;
          res.send("quantity update")
       }else{
         let data=new CartModel({userID,image,name,price,productID,total,quantity});
         await data.save();
         res.send("Added in cart");
       }
       
    }catch(err){
        res.send(err.message);
    }

})

cartRouter.patch("/updatecart/:id",async(req,res)=>{
    const {id}=req.params;
    const cart= await CartModel.findOne({_id:id})
    try {
        if(req.body.id!==cart.userID){
            res.status(200).send({"msg":`You are not authoried for this action`})

        }else{
            await CartModel.findByIdAndUpdate({_id:id},req.body)
            res.status(200).send({"msg":`The note with id:${id} has been updated`})

        }
    } catch (err) {
        res.status(400).send({"err":err.message})
    }
})


cartRouter.delete("/deletecart/:id",async(req,res)=>{
    const {id}=req.params;
    const cart= await CartModel.findOne({_id:id});
    try {
        if(req.body.id!==note.userID){
            res.status(200).send({"msg":`You are not authoried for this action`})

        }else{
            await CartModel.findByIdAndUpdate({_id:id})
            res.status(200).send({"msg":`The note with id:${id} has been deleted`})

        }
    } catch (err) {
        res.status(400).send({"err":err.message})
    }
})

module.exports={
    cartRouter
}