const express= require ('express');
const router= express.Router();
const mongoose= require('mongoose');
const checkAuth = require('../middleware/check-auth');
const Genre= require('../models/genre');



router.get('/', checkAuth, (req,res,next)=>{
    Genre.find().exec()
    .then(docs=>{console.log(docs);
    res.status(200).json(docs);
})
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

 

module.exports=router;
