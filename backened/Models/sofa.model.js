const mongoose=require("mongoose");


const sofaSchema=mongoose.Schema({
      image:{type:String,required:true},
      discount:{type:Number,required:true},
      name:{type:String,required:true},
      small:{type:String},
      brand:{type:String,required:true},
      price:{type:Number,required:true},
      emi:{type:Number,required:true},
},{
    versionKey:false,
})


const SofaModel=mongoose.model("sofa",sofaSchema);

module.exports={
    SofaModel
}