const mongoose=require("mongoose");


const bedSchema=mongoose.Schema({
      image:{type:String,required:true},
      discount:{type:Number,required:true},
      name:{type:String,required:true},
      brand:{type:String,required:true},
      price:{type:Number,required:true},
      emi:{type:Number,required:true},
},{
    versionKey:false,
})


const BedModel=mongoose.model("bed",bedSchema);

module.exports={
    BedModel
}