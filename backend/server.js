const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/userModels");

app.use(express.json)

mongoose.connect(process.env.URI).
then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) console.log(err);
        console.log("running successfully at", process.env.PORT);
    });
})
.catch((error) => {
    console.log("error", error);
})

//create

app.post("/", async (req, res) => {

    const {name,email,age} = req.body;

    const User = require("./models/userModels")

    try {
       
    const userData = await User.create()({
        name: name,
        email: email,
        age: age
    });

    res.status(201).json(userAdded)

    } catch (error) {
        
        console.log(error)
        res.send(400).json({error:error.message})
        
    }

})

app.get("/", (req,res) => {
    res.send("api bankdu bikdu")
});

