const jwt=require("jsonwebtoken");
require("dotenv").config();

const auth=(req,res,next)=>{

    const token=req.headers.authorization;
    try{
        if(token){
            const decoded = jwt.verify(token.split(" ")[1], process.env.secretKey);
            console.log(decoded);
            if(decoded){
                req.body.userID=decoded.userID;
                next();
            }
        }else{
            res.send("Please Login First !!");
        }

    }catch(err){
        res.send({"msg":err.message});
    }
}


module.exports={
    auth
}