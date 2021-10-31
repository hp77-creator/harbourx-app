const {
    express,
    PORT,
} = require("./imports.js");

const dotenv = require("dotenv");
const app = express();

const UserController = require("./Routes/User");
const GroupController = require("./Routes/Groups");
const SplitController = require("./Routes/Splits");


dotenv.config();

app.use(express.json());
app.use("/api/user",UserController);
app.use("/api/group",GroupController);
app.use("/api/split",SplitController);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.use("*/static/", express.static(__dirname + '/public/static/'));

app.use(express.static(__dirname+"/frontend/build"));