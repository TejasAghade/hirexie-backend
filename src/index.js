const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");


dotEnv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB_URL).then(function(){
    console.log("connected");

});

const routings ={
    applications : require("./routes/applications"),
    company : require("./routes/company"),
    employer : require("./routes/employer"),
    jobs : require("./routes/jobs"),
    userDetails : require("./routes/userDetails"),
    auth : require("./routes/auth"),
}


applications = require("./routes/applications"),
company = require("./routes/company"),
employer = require("./routes/employer"),
jobs = require("./routes/jobs"),
userDetails = require("./routes/userDetails"),
auth = require("./routes/auth"),

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/hirable/api/aplications", applications);
app.use("/hirable/api/auth/", auth);





const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(Date.now())
    console.log("server started on port", PORT);
})