require("dotenv").config({ path: "./../.env" });
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const {Request} = require("tedious");
const {AzureSQLConnection,insertDB,loginDB,selectDB} = require("./../imports")
const asyncHandler = require('express-async-handler')

const {verifyToken} = require("./../middlewares/verifytoken.middleware");


router.get("/",(req,res)=>{
    res.status(200).json({
        name:"Groups apis"
    })
})


// requirement, 
router.post("/create",verifyToken,asyncHandler(async (req,res)=>{
    try{
        let {groupname,category,groupimage,splittype,totalmembers,expenses} = req.body;  
        if(!( groupname && category && groupimage && splittype && totalmembers )){res.status(500).json({status:false,message:"INCORRECT FIELDS"}); return;}
    }catch(e){
        res.status(500).send(e)
    }


    let token = req.headers["authorization"].split(" ")[1]
    let userTokenData = jwt.verify(token,process.env.SECRET_KEY);
    console.log(userTokenData)
    
    let {groupname,category,groupimage,splittype,totalmembers,expenses} = req.body;  
    console.log(groupname,category,groupimage,splittype,totalmembers,expenses)
    if(!( groupname && category && groupimage && splittype && totalmembers)){res.status(500).json({status:false,message:"INCORRECT FIELDS"});  return;}
    if(groupname.length == 0 ){res.status(500).json({status:false,message:"INVALID FIELD VALUE"});  return;}
    

    let query = `
        INSERT INTO groups (
            groupname,
            groupimage,
            category,
            splittype,
            totalmembers,
            expenses,
            createdat
        ) VALUES (
            '${groupname}',
            '${groupimage ? groupimage : 'https://avatars.githubusercontent.com/u/48829314?s=400&v=4'}',
            '${category ? category : 'default'}',
            '${splittype ? splittype : 'E'}',
            ${totalmembers ? totalmembers : 0},
            ${expenses ? expenses : 0},
            '${(new Date()).getTime()}'
        );
        
        `
  
    let result = await insertDB(query,(data)=>{
         // console.log(data)
            // Called after result
            if(data.status){
                res.setHeader('Content-Type', 'application/json');
                let obj2send = {status:true,message:"Group created"}
        
                res.status(200).json(obj2send).end();
            }else{
                res.setHeader('Content-Type', 'application/json');
                
                res.status(500).json(data).end()
            }



    })

}))

// requirement, 
router.post("/join",verifyToken,asyncHandler(async (req,res)=>{
    try{ 
        let {groupid,groupMemberIDs} = req.body;  
        if(!( groupid  && groupMemberIDs)){res.status(500).json({status:false,message:"INCORRECT FIELDS"}); return;}
    }catch(e){
        res.status(500).send(e)
    }


    let token = req.headers["authorization"].split(" ")[1]
    let userTokenData = jwt.verify(token,process.env.SECRET_KEY);
   
    
    
    let {groupid,groupMemberIDs} = req.body;  
    if(!( groupid  && groupMemberIDs)){res.status(500).json({status:false,message:"INCORRECT FIELDS"}); return;}


    console.log(groupMemberIDs)
    let tuples = ``;
    for(let i=0; i < groupMemberIDs.length; i++){
        if(i == groupMemberIDs.length - 1){
            tuples += `( ${groupMemberIDs[i]},${groupid}, '${(new Date()).getTime()}' )`;
        }else{
            tuples += `( ${groupMemberIDs[i]},${groupid}, '${(new Date()).getTime()}' ), `;
        }
    }
    let query = `
        INSERT INTO joins (
            userid,
            groupid,
            joinedat
        ) VALUES `+tuples+`;
        
        `
  
    let result = await insertDB(query,(data)=>{
         // console.log(data)
            // Called after result
            if(data.status){
                res.setHeader('Content-Type', 'application/json');
                let obj2send = {status:true,message:"Provided users joined the group"}
        
                res.status(200).json(obj2send).end();
            }else{
                res.setHeader('Content-Type', 'application/json');
                
                res.status(500).json(data).end()
            }



    })

}))
router.get("/all",asyncHandler(async (req,res)=>{
    let query = 'SELECT * FROM groups;'
    let result = await selectDB(query,(data)=>{
        console.log(data)
        res.json(data)
    });
}))

module.exports = router