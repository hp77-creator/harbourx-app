const jwt = require("jsonwebtoken");
require('dotenv').config('./../.env')


const verifyToken = (req,res,next)=>{
    try{
        let token = req.headers["authorization"].split(" ")[1]
        if(!(token)) res.status(500).json({ok:false,message:"Authorization failed"}) 
        
        let verifyStatus = jwt.verify(token,process.env.SECRET_KEY)
        if(verifyStatus){
            next();
        }else{
            res.status(500).json({ok:false,message:"Authorization token verification failed "}) 
        }

    }catch(error){
        console.log(error)
        res.status(501).json({ok:false,message:"INTERNAL SERVER ERROR - Verify"})
    }
}
module.exports = {verifyToken}