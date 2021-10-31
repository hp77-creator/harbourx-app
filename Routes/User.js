require("dotenv").config({ path: "./../.env" });
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const {Request} = require("tedious");
const {AzureSQLConnection,insertDB,loginDB,selectDB} = require("./../imports")
const asyncHandler = require('express-async-handler')


router.get("/",(req,res)=>{
    res.status(200).json({
        name:"SF"
    })
})

router.post("/login",asyncHandler(async (req,res)=>{
    


    let {email,password} = req.body;
if(!(email &&password)) {res.status(500).json({status:false,message:"PLEASE SEND CORRECT JSON"})};

let hashedpassword = CryptoJS.SHA256(password).toString()

let query = `SELECT * FROM users WHERE email='${email}' and userpassword='${hashedpassword}'; `;
let result = await loginDB(query,(data)=>{


    // console.log(data)
    // Called after result
    if(data.length == 1){
        res.setHeader('Content-Type', 'application/json');
        const accessToken = jwt.sign({userdata:{...data[0]},email}, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        let obj2send = {userdata:{...data[0]},email,accessToken,process:"LOGIN"}

        res.status(200).json(obj2send).end();
    }else{
        res.setHeader('Content-Type', 'application/json');
        
        res.status(500).json(data).end()
    }
   



})

}))

router.post("/register",async (req,res)=>{
    try{
        let {
            username,
            email,
            password,
            fullname,
            phonenumber,
            
        } = req.body;

        if(!(username && email && password && fullname && phonenumber)) throw "Invalid Fields";

        let timestamp = new Date();
        let hashedpassword = CryptoJS.SHA256(password).toString()

        let result = await insertDB(`
        
        INSERT INTO users (
            username,
            firstname,
            lastname,
            email,
            userpassword,
            phone_number,
            profileimage,
            joinedat,
            owes,
            owed
        ) values (
            '${username}',
            '${fullname.split(" ")[0]}',
            '${fullname.split(" ")[1]}',
            '${email}',
            '${hashedpassword}',
            '${phonenumber}',
            'https://avatars.githubusercontent.com/u/48829314?s=400&v=4',
            ${timestamp.getTime()},
            0,
            0
        );
        
        SELECT * FROM users where email='${email}';`,(data)=>{


            console.log(data)
            // Called after result
            if(data.length != 0){
                res.setHeader('Content-Type', 'application/json');
                const accessToken = jwt.sign({userdata:{...data[0]},email}, process.env.SECRET_KEY, {
                    expiresIn: "1d",
                });
                let obj2send = {userdata:{...data[0]},email,accessToken,process:"REGISTER"}
        
                res.status(200).json(obj2send).end();
            }else{
                res.setHeader('Content-Type', 'application/json');
                
                res.status(500).json(data).end()
            }



        });
        // console.log("RESULT" + result)

    }catch(err){
        console.log(err)
        // res.status(500).send(String(err))
    }
})

router.get("/all",asyncHandler(async (req,res)=>{
    let query = 'SELECT id,username,firstname,lastname,email,phone_number,profileimage,joinedat,owes,owed FROM users;'
    let result = await selectDB(query,(data)=>{
        console.log(data)
        res.json(data)
    });
}))

module.exports = router