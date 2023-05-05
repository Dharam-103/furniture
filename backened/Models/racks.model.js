const mongoose=require("mongoose");


const rackSchema=mongoose.Schema({
      image:{type:String,required:true},
      discount:{type:Number,required:true},
      name:{type:String,required:true},
      brand:{type:String,required:true},
      price:{type:Number,required:true},
      emi:{type:Number,required:true},
},{
    versionKey:false,
})


const RackModel=mongoose.model("rack",rackSchema);

module.exports={
    RackModel
}