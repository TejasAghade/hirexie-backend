const express = require("express");
const app = express();

const dotEnv = require("dotenv");

const mongoose = require("mongoose");

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

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/aplications", routings.applications);
app.use("/api/company", routings.company);
app.use("/api/employer", routings.employer);
app.use("/api/jobs", routings.jobs);
app.use("/api/userDetails", routings.userDetails);
app.use("/api/auth", routings.auth);



app.listen(4000, ()=> console.log("server is up and running on port 4000"));