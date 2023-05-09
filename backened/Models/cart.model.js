const mongoose=require("mongoose");


const cartSchema=mongoose.Schema({
      userID:String,
      productID:String,
      image:{type:String,required:true},
      name:{type:String,required:true},
      price:{type:Number,required:true},
      quantity:{type:Number,required:true,default:1},
      total:{type:Number,required:true}    
},{
    versionKey:false                   
})


const CartModel=mongoose.model("cart",cartSchema);

module.exports={
    CartModel
}