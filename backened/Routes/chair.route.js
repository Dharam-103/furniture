const express=require("express");
const { ChairModel } = require("../Models/chair.model");
const chairRouter=express.Router();


chairRouter.get("/",async(req,res)=>{
    const {brand,page,limit,sort}=req.query;
     console.log(brand,page,limit,sort);
     let query={};
    try{
        if(brand){
            query.brand=brand
        }

        let skip;
        if(page){
            skip=(page-1)*limit;
        }else{
            skip=0;
        }
        let sorting;
        if(sort=="asc"){
          sorting={price:1};
        }

        if(sort=="desc"){
            sorting={price:-1}
        }
       const data=await ChairModel.find(query).sort(sorting).skip(skip).limit(limit);
       res.send(data);
    }catch(err){
        res.send({"msg":err.message});
    }
})


chairRouter.post("/add",async(req,res)=>{
     const payload=req.body;
     try{
        await ChairModel.insertMany(payload);
        res.send("Data is added");
     }catch(err){
        res.send({"msg":err.message});
     }
})

chairRouter.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params;
    try{
       await ChairModel.findByIdAndDelete({_id:id});
       res.send("Data is deleted");
    }catch(err){
        res.send({"msg":err.message});
    }
})

chairRouter.patch("/update/:id",async(req,res)=>{
    const{id}=req.params;
    try{
       await ChairModel.findByIdAndUpdate({_id:id},req.body);
       res.send("Data is updated");
    }catch(err){
        res.send({"msg":err.message});
    }
})


module.exports={
    chairRouter
}