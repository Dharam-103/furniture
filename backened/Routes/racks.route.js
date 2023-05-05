const express=require("express");
const { RackModel } = require("../Models/racks.model");
const rackRouter=express.Router();


rackRouter.get("/",async(req,res)=>{
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
       const data=await RackModel.find(query).sort(sorting).skip(skip).limit(limit);
       res.send(data);
    }catch(err){
        res.send({"msg":err.message});
    }
})


rackRouter.post("/add",async(req,res)=>{
     const payload=req.body;
     try{
        await RackModel.insertMany(payload);
        res.send("Data is added");
     }catch(err){
        res.send({"msg":err.message});
     }
})

rackRouter.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params;
    try{
       await RackModel.findByIdAndDelete({_id:id});
       res.send("Data is deleted");
    }catch(err){
        res.send({"msg":err.message});
    }
})

rackRouter.patch("/update/:id",async(req,res)=>{
    const{id}=req.params;
    try{
       await RackModel.findByIdAndUpdate({_id:id},req.body);
       res.send("Data is updated");
    }catch(err){
        res.send({"msg":err.message});
    }
})


module.exports={
    rackRouter
}