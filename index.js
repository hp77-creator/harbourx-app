const {
    express,
    PORT,
} = require("./imports.js");

const dotenv = require("dotenv");
const app = express();

const UserController = require("./Routes/User");
const GroupController = require("./Routes/Groups");
const SplitController = require("./Routes/Splits");
const RazorpayController = require("./Routes/Razorpay");


dotenv.config();


app.use("*",(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","POST, PUT, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","Content-type, Authorization");
    if(req.method == "OPTIONS"){
        res.end();
        return;
    }
    next();

})

app.use(express.json());
app.use("/api/user",UserController);
app.use("/api/group",GroupController);
app.use("/api/split",SplitController);
app.use("/api/razorpay",RazorpayController);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.use("*/static/", express.static(__dirname + '/public/static/'));

app.use(express.static(__dirname+"/frontend/build"));