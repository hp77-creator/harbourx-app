require("dotenv").config({ path: "./../.env" });
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const {Request} = require("tedious");
const {AzureSQLConnection,insertDB,loginDB,selectDB} = require("./../imports")
const asyncHandler = require('express-async-handler')

const {verifyToken} = require("./../middlewares/verifytoken.middleware");

// Step 1 Creating Splits, with amount & getting the Split ID
router.post("/create",verifyToken,asyncHandler(async (req,res)=>{
    try{ 
        let {splitamount} = req.body;  
        if(!( splitamount)){res.status(500).json({status:false,message:"INCORRECT FIELDS1"}); return;}
    }catch(e){
        res.status(500).send(e)
    }
    let token = req.headers["authorization"].split(" ")[1]
    let userTokenData = jwt.verify(token,process.env.SECRET_KEY);
   
    console.log()
    
    let {splitamount} = req.body;  
    if(!( splitamount)){res.status(500).json({status:false,message:"INCORRECT FIELDS2"}); return;}


    let tt = (new Date()).getTime();
    let query = `
    INSERT INTO splits (splitamount,createdat) VALUES (${splitamount},'${tt}'); SELECT * FROM splits where createdat = '${tt}'`;
    console.log(query)
    let result = await insertDB(query,(data)=>{
        console.log(data)
           // Called after result
           if(data.length > 1){
               res.setHeader('Content-Type', 'application/json');
               let obj2send = {status:true,data:data,message:"SPLITS CREATED"}
       
               res.status(200).json(obj2send).end();
           }else{
               res.setHeader('Content-Type', 'application/json');
               
               res.status(500).json(data).end()
           }



   })





}))

router.post("/addSplitMembers",verifyToken,asyncHandler(async (req,res)=>{
    try{ 
        let {allcontributions} = req.body;  
        if(!( allcontributions && allcontributions.length > 0)){res.status(500).json({status:false,message:"INCORRECT FIELDS1"}); return;}
    }catch(e){
        res.status(500).send(e)
    }
    let token = req.headers["authorization"].split(" ")[1]
    let userTokenData = jwt.verify(token,process.env.SECRET_KEY);
   
    
    let {allcontributions} = req.body;  
    if(!( allcontributions && allcontributions.length > 0)){res.status(500).json({status:false,message:"INCORRECT FIELDS2"}); return;}


    // console.log(allcontributions)
    let tuples = ``;
    for(let i=0; i < allcontributions.length; i++){
        if(i == allcontributions.length - 1){
            tuples += `(${allcontributions[i].splitid},${allcontributions[i].userid},${allcontributions[i].groupid},${allcontributions[i].individualsplitamount},${allcontributions[i].individualsharecount} )`;
        }else{
            tuples +=  `(${allcontributions[i].splitid},${allcontributions[i].userid},${allcontributions[i].groupid},${allcontributions[i].individualsplitamount},${allcontributions[i].individualsharecount} ),`;
        }
    }


    let query = `
        INSERT INTO splitmembers (splitid, userid, groupid, individualsplitamount, individualsharecount)
        VALUES ${tuples};
        SELECT * FROM splitmembers where splitid = '${allcontributions[0].splitid}';
    `;



    let result = await insertDB(query,(data)=>{
        console.log(data)
           // Called after result
           if(data.length){
               res.setHeader('Content-Type', 'application/json');
               let obj2send = {status:true,message:"All contributions added to splitid = ("+allcontributions[0].splitid+")"}
       
               res.status(200).json(obj2send).end();
           }else{
               res.setHeader('Content-Type', 'application/json');
               
               res.status(500).json(data).end()
           }



   })

}))


router.get("/all",asyncHandler(async (req,res)=>{
    let query = 'SELECT * FROM splits;'
    let result = await selectDB(query,(data)=>{
        console.log(data)
        res.json(data)
    });
}))
router.get("/allmembers",asyncHandler(async (req,res)=>{
    let query = 'SELECT * FROM splitmembers;'
    let result = await selectDB(query,(data)=>{
        console.log(data)
        res.json(data)
    });
}))


module.exports = router