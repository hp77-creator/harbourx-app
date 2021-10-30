require("dotenv").config({ path: "./../.env" });
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const {Request} = require("tedious");
const {AzureSQLConnection} = require("./../imports")



router.get("/",(req,res)=>{
    res.status(200).json({
        name:"SF"
    })
})

router.post("/login",(req,res)=>{
    try{
        let {email,password} = req.body;
        console.log(email,password);

        res.json({statis:"done"});
    }catch(err){
        res.status(500).json({stataus:"server error"})
    }
})

router.post("/register",(req,res)=>{
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
        let hashedpassword = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY
          ).toString()


        // Read all rows from table
        const request = new Request(
            `
            INSERT INTO users (
                username,
                firstname,
                lastname,
                email,
                password,
                phone_number,
                profileimage,
                joinedat,
                owes,
                owed
            ) values (
                'dgsdf',
                'dsfgd',
                'dsgrdgdsg',
                'sdfg@gnmail.com',
                'dsfgsaedfsdfgsrdgf',
                '4w5e543545',
                'https://avatars.githubusercontent.com/u/48829314?s=400&v=4',
                '7364837469',
                0,
                0            
            );`,
        (err, rowCount) => {
            console.log(err,rowCount)
            if (err) {
                
            console.error(err.message); throw "DB ERROR"
            } else {

                
                console.log(email,password);

                res.status(200).json({statis:"done"});
            console.log(`${rowCount} row(s) returned`);
            }
        }
        );
    
        request.on("row", columns => {
            columns.forEach(column => {
                console.log("%s\t%s", column.metadata.colName, column.value);
            });
        });

        AzureSQLConnection.execSql();



    }catch(err){
        console.log(err)
        res.status(500).end(String(err))
    }
})
module.exports = router