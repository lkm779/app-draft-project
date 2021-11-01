const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');

const User = require("../models/user");
const { token } = require("morgan");


router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 12, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'User succesfully created'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
        });
    }
  });
});

router.post('/login',(req,res,next)=>{
    User.find({emal:req.body.email})
    .exec()
    .then(user=>{
        if(user.length<1){
            return res.status(404).json({
                message:'Email address not found, user does not exist'
            });
        }
        bcrypt.compare(req.body.password.user[0].password, (err, result)=>{
        if (err){
            return res.status(404).json({
                message:'Authorization failed'
        });
    }
        if (result){
            const token= jwt.sign({
            email: user [0].email,
            userId: user[0]._id
            }, process.env.JWT_KEY, 
            );
            return res.status(200).json({
                message:' Authorization successful'
            });
        }
        res.status(401).json({
            message:'Authorization failed',
            token:token
        });
    });
})



    .catch (err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
    });
});


module.exports = router;