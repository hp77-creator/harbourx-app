require("dotenv").config({ path: "./../.env" });
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const {razorpay} = require("./../imports")




router.post("/",expressAsyncHandler(async (req,res)=>{

    const payment_capture = 1;
    const amount = Number(req.body.amount);
    const currency = "INR";
    
    const options = {
      amount: amount * 100,
      currency,
      receipt: "reciept_"+String((Math.random()*10000)),
      payment_capture,
    };
    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.status(200).json({
          id: response.id,
          currency: response.currency,
          amount: response.amount,
        });
      } catch (error) {
        console.log(error);
      }
    
}))



module.exports = router