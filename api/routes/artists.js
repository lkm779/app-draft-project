const express= require ('express');
const router= express.Router();
const Artist= require('../models/artist');
const checkAuth= require('../middleware/check-auth');

router.get('/',checkAuth, (req,res,next)=>{
    Artist.find().exec()
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


module.exports= router;


