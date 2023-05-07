const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

dotEnv.config();

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://notes_app123:cPzqS086oitbLiGN@cluster0.zpvfxfw.mongodb.net/?retryWrites=true&w=majority").then(function () {
    console.log("connected");

});



applications = require("./routes/applications"),
    company = require("./routes/company"),
    employer = require("./routes/employer"),
    jobs = require("./routes/jobs"),
    userDetails = require("./routes/userDetails"),
    auth = require("./routes/auth"),

    // Middlewares
    app.use(express.json());


// route Middlewares
app.use("/api/aplications", applications);
app.use("/api/auth/", auth);





const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(Date.now())
    console.log("server started on port", PORT);
})