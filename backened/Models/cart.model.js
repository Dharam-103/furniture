const mongoose=require("mongoose");


const cartSchema=mongoose.Schema({
      userID:String,
      product:[
        {
            productID:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
            image:{type:String,required:true},
            name:{type:String,required:true},
            price:{type:Number,required:true},
            quantity:{type:Number,required:true,default:1},
            total:{type:Number,required:true}
        }
      ],
      subTotal:{type:Number,default:0}
},{
    versionKey:false                   
})


const CartModel=mongoose.model("cart",cartSchema);

module.exports={
    CartModel
}