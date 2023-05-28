const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For 

dotEnv.config();

mongoose.set("strictQuery", false);

try {
    mongoose.connect(process.env.DB_URL).then(function () {
        console.log("connected");

    });


} catch (err) {
    console.log(err);
}




    applications = require("./routes/applications"),
    company = require("./routes/company"),
    employer = require("./routes/employer"),
    jobs = require("./routes/jobs"),
    userDetails = require("./routes/userDetails"),
    auth = require("./routes/auth"),
    docs = require("./routes/documents"),

    // Middlewares


    // route Middlewares
    app.use("/api/aplications", applications);
    app.use("/api/auth/", auth);
    app.use("/api/company/", company);
    app.use("/api/user/", userDetails);
    app.use("/api/employer/", employer);
    app.use("/api/document/", docs);






const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(Date.now())
    console.log("server started on port", PORT);
})