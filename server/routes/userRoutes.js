const express = require('express');
const User = require('../models/userModel');
const app = express.Router();



app.post('/login', async (req, res) => {
    try{
        const result = await User.findOne({username: req.body.username, password:req.body.password})
        if(result){
            res.send(result)
        }
    }catch(err){
        res.status(404).json(
            {"status": 404,
             "message": err})
    }
})

app.post('/register', async (req, res) => {
    try{
        const newuser = new User(req.body);
        const result = await newuser.save();
        console.log(result);
        res.send("registeration successful");
    }catch(err){
        res.send(err)
    }
})

app.post('/update', async (req, res) => {
    try{
        await User.findOneAndUpdate(req.body.data._id, req.body);
        const updatedUser = await User.findOne(req.body._id);
        console.log(updatedUser);
        res.send("updation is successful");
    }catch(err){
        res.status(404).json(
            {"status": 404,
             "message": err})
    }
})

module.exports = app;