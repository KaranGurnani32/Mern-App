const express = require("express");
const mongoose = require("mongoose")
const User = require("../models/userModels")

const router = express.Router();
//create

router.post("/", async (req, res) => {
    const {name,email,age} = req.body;

    try {
    const userAdded = await User.create({
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

router.get("/", async (req,res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error)
        res.send(500).json({error:error.message})
    }
});

module.exports = router;
